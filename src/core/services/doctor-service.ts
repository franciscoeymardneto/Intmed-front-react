import { HttpService } from './http-service';
import { DoctorApiResponse, FetchDoctorsApiResponse } from '../dto/api/doctor.api.dto';
import { Doctor } from '../models/doctor';
import { CancelToken } from 'axios';

export class DoctorService {
  constructor(private http: HttpService) {
  }

  async list(specialityId: number, cancelToken: CancelToken): Promise<Doctor[]> {
    const response = await this.http.get<DoctorApiResponse[]>(`/medicos?specialityId=${specialityId}`, cancelToken)
    return new FetchDoctorsApiResponse(response).doctors
  }
}
