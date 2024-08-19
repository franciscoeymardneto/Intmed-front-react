import { HttpService } from './http-service';
import { ApiSpecialityResponse } from '../dto/api/speciality.api.dto';
import { Speciality } from '../models/speciality';
import { CancelToken } from 'axios';

export class SpecialityService {
  constructor(private http: HttpService) {
  }
  async list(cancelToken: CancelToken): Promise<Speciality[]> {
    const response = await this.http.get<ApiSpecialityResponse[]>(`/especialidades`, cancelToken)
    return response.map(spec => ({
        id: spec.id,
        name: spec.nome
      })
    )
  }
}
