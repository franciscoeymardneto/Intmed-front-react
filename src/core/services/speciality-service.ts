import { HttpService } from './http-service';
import { ApiSpecialityResponse } from '../dto/api/speciality.api.dto';
import { Speciality } from '../models/speciality';

export class SpecialityService {
  constructor(private http: HttpService) {
  }
  async list(): Promise<Speciality[]> {
    const response = await this.http.get<ApiSpecialityResponse[]>(`/especialidades`)
    return response.map(spec => ({
        id: spec.id,
        name: spec.nome
      })
    )
  }
}
