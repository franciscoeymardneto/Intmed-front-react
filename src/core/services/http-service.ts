
import axios, { AxiosInstance, CancelTokenSource } from "axios"
import { AuthContextType } from "../../contexts/AuthContext";
import { ApiError } from "../errors/api-error";

export class HttpService {
  private baseUrl = `${import.meta.env.VITE_BASE_URL}`;
  private headers = { 'Content-Type': 'application/json' }
  private http: AxiosInstance

  constructor(private authContext: AuthContextType) {
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: this.headers
    })


    this.http.interceptors.request.use(config => {
      const token = this.authContext.getUserSession()?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    }, error => {
      return Promise.reject(error);
    });

    this.http.interceptors.response.use(response => {
      return response;
    }, error => {
      const apiError = new ApiError(error.response.status, Object.values(error.response.data).join())
      return Promise.reject(apiError);
    });
  }

  async post<K,T>(path: string, body: K): Promise<T> {
    const response = await this.http.post<T>(
      `${this.baseUrl}${path}`,
      body)

    return response.data
  }

  async get<T>(path: string): Promise<T> {
    const response = await this.http.get<T>(
      `${this.baseUrl}${path}`)

    return response.data
  }

  async delete(path: string): Promise<void> {
    await this.http.delete(
      `${this.baseUrl}${path}`)
  }

  static cancelToken(): CancelTokenSource {
    return axios.CancelToken.source()
  }
}
