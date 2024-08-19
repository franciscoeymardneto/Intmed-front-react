import { HttpService } from './http-service';
import { Schedule } from '../models/schedule';
import { FetchSchedulesApiResponse, ScheduleApiResponse } from '../dto/api/schedule.api.dto';
import { CancelToken } from 'axios';

export class ScheduleService {
  constructor(private http: HttpService) {
  }

  async list(doctorId: number, cancelToken: CancelToken): Promise<Schedule[]> {
    const response = await this.http.get<ScheduleApiResponse[]>(`/agendas?medico=${doctorId}`, cancelToken)

    return new FetchSchedulesApiResponse(response).schedules

  }
}
