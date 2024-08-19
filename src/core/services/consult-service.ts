import { HttpService } from './http-service';
import { Consult } from '../models/consult';
import { FetchConsultsApiResponse, ConsultApiResponseDTO, CreateConsultApi, CreateConsultApiResponse } from '../dto/api/consult.api.dto';
import { AuthContextType } from '../../contexts/AuthContext';

export class ConsultService {

  constructor(private http: HttpService, private authContext: AuthContextType) {
  }

  async list(): Promise<Consult[]> {
    const clientId = this.authContext.getUserSession()?.userid

    const response = await this.http.get<ConsultApiResponseDTO[]>(`/consultas?clientId=${clientId}`)

    return new FetchConsultsApiResponse(response).consultas
  }

  async delete(consultId: number): Promise<void> {
    return await this.http.delete(`/consultas/${consultId}`)
  }

  async create(params: CreateConsultApi): Promise<Consult> {
    const clientId = this.authContext.getUserSession()?.userid

    const body = {
      ...params,
      cliente_id: clientId
    }

    const response = await this.http.post<CreateConsultApi,ConsultApiResponseDTO>(`/consultas`, body)

    return new CreateConsultApiResponse(response).consulta
  }
}
