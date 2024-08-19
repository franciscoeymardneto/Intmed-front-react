import { HttpService } from './http-service';
import { ApiRegisterRequest, ApiRegisterResponse } from '../dto/api/register.api.dto';
import { CancelToken } from 'axios';

export class RegisterService {
  constructor(private http: HttpService) {
  }

  async register(body: ApiRegisterRequest, cancelToken: CancelToken): Promise<void> {
    await this.http.post<ApiRegisterResponse>('/users', body, cancelToken)
  }
}
