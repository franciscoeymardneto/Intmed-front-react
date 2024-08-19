import { HttpService } from './http-service';
import { Schedule } from '../models/schedule';
import { FetchSchedulesApiResponse, ScheduleApiResponse } from '../dto/api/schedule.api.dto';
export class ScheduleService {
  constructor(private http: HttpService) {
  }

  async list(doctorId: number): Promise<Schedule[]> {
    const response = await this.http.get<ScheduleApiResponse[]>(`/agendas?medico=${doctorId}`)

    return new FetchSchedulesApiResponse(response).schedules

  }
}
