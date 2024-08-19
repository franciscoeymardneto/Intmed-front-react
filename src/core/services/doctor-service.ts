import { HttpService } from './http-service';
import { DoctorApiResponse, FetchDoctorsApiResponse } from '../dto/api/doctor.api.dto';
import { Doctor } from '../models/doctor';

export class DoctorService {
  constructor(private http: HttpService) {
  }

  async list(specialityId: number): Promise<Doctor[]> {
    const response = await this.http.get<DoctorApiResponse[]>(`/medicos?specialityId=${specialityId}`)
    return new FetchDoctorsApiResponse(response).doctors
  }
}
