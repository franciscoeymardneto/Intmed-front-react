import { HttpService } from './http-service';
import { ApiRegisterRequest, ApiRegisterResponse } from '../dto/api/register.api.dto';
export class RegisterService {
  constructor(private http: HttpService) {
  }

  async register(body: ApiRegisterRequest): Promise<void> {
    await this.http.post<ApiRegisterResponse>('/users', body)
  }
}
