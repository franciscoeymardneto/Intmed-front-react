import { HttpService } from './http-service';
import { ApiLoginResponse, ApiLoginResquest } from '../dto/api/login.api.dto';

export class AuthService {
  constructor(private http: HttpService) {
  }

  login(body: ApiLoginResquest): Promise<ApiLoginResponse> {
    return this.http.post<ApiLoginResquest,ApiLoginResponse>('/users/login', body)
  }
}
