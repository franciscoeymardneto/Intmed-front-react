import { HttpService } from './http-service';
import { ApiLoginResponse } from '../dto/api/login.api.dto';

export class AuthService {
  constructor(private http: HttpService) {
  }

  login(username: string, password: string): Promise<ApiLoginResponse> {
    return this.http.post<ApiLoginResponse>('/users/login', {
      username,
      password
    })
  }
}
