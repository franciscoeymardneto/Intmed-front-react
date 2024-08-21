import { useQuery } from 'react-query';
import { useAuth } from '../contexts/AuthContext';
import { ScheduleService } from '../core/services/schedule-service';
import { HttpService } from '../core/services/http-service';
import { ApiError } from '../core/errors/api-error';
import { useToastStack } from '../contexts/ToastContext';
import { Schedule } from '../core/models/schedule';

type UseScheduleParams = {
    doctorId: number | undefined
}
export const useSchedule = () => {
    const QueryConsultKey = 'Schedule_QUERY'
    const pushToast = useToastStack()
    const authContext = useAuth()
    const httpService = new HttpService(authContext)
    const scheduleService = new ScheduleService(httpService);

    const fetchSchedule = ({
        doctorId
    }: UseScheduleParams) => useQuery<unknown, ApiError, Schedule[]>({
        enabled: !!doctorId,
        queryKey: [QueryConsultKey],
        queryFn: ({ signal }) => {
            const source = HttpService.cancelToken()
            const promise = scheduleService.list(doctorId as number)
            signal?.addEventListener('abort', () => source.cancel())
            return promise
        },
        onError: (error) => {
            pushToast(`Erro ao listar agendas: ${error.message}`, {
                type: 'error',
            });
        },
    });

    return {
        fetchSchedule
    };
};
