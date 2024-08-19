
import axios, { AxiosInstance, CancelTokenSource } from "axios"
import { useAuth } from "../../contexts/AuthContext";
import { ApiError } from "../errors/api-error";

export class HttpService {
  private baseUrl = `${import.meta.env.VITE_BASE_URL}`;
  private headers = { 'Content-Type': 'application/json' }
  private http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: this.headers
    })


    this.http.interceptors.request.use(config => {
      const token = useAuth().getUserSession()?.token;
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
      console.log(error)
      // const apiError = new ApiError(error.response.status)
      return Promise.reject(error);
    });
  }

  async post<T>(path: string, body: any): Promise<T> {
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
