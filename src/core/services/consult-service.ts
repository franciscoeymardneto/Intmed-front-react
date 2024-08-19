import { HttpService } from './http-service';
import { Consult } from '../models/consult';
import { FetchConsultsApiResponse, ConsultApiResponseDTO, CreateConsultApi, CreateConsultApiResponse } from '../dto/api/consult.api.dto';
import { useAuth } from '../../contexts/AuthContext';
import { CancelToken } from 'axios';

export class ConsultService {

  constructor(private http: HttpService) {
  }

  async list(cancelToken: CancelToken): Promise<Consult[]> {
    let clientId = useAuth().getUserSession()?.userid

    const response = await this.http.get<ConsultApiResponseDTO[]>(`/consultas?clientId=${clientId}`, cancelToken)

    return new FetchConsultsApiResponse(response).consultas
  }

  async delete(consultId: number, cancelToken: CancelToken): Promise<void> {
    return await this.http.delete(`/consultas/${consultId}`, cancelToken)
  }

  async create(params: CreateConsultApi, cancelToken: CancelToken): Promise<Consult> {
    let clientId = useAuth().getUserSession()?.userid

    let body = {
      ...params,
      cliente_id: clientId
    }

    const response = await this.http.post<ConsultApiResponseDTO>(`/consultas`, body, cancelToken)

    return new CreateConsultApiResponse(response).consulta
  }
}
