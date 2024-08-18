
import axios, { AxiosInstance, CancelToken } from "axios"

export class HttpService {
  private baseUrl = `${import.meta.env.VITE_BASE_URL}`;
  private headers = { 'Content-Type': 'application/json' }
  private http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: this.headers
    })
  }

  async post<T>(path: string, body: any, cancelToken: CancelToken): Promise<T> {
    const response = await this.http.post<T>(
      `${this.baseUrl}${path}`,
      body,
      {
        cancelToken: cancelToken
      })

    return response.data
  }

  async get<T>(path: string, cancelToken: CancelToken): Promise<T> {
    const response = await this.http.get<T>(
      `${this.baseUrl}${path}`,
      {
        cancelToken: cancelToken
      })

    return response.data
  }

  async delete(path: string, cancelToken: CancelToken): Promise<void> {
    await this.http.delete(
      `${this.baseUrl}${path}`,
      {
        cancelToken: cancelToken
      })
  }
}
