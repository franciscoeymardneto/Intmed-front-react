import { useQuery } from 'react-query';
import { useAuth } from '../contexts/AuthContext';
import { DoctorService } from '../core/services/doctor-service';
import { HttpService } from '../core/services/http-service';
import { ApiError } from '../core/errors/api-error';
import { useToastStack } from '../contexts/ToastContext';
import { Doctor } from '../core/models/doctor';

type UseDoctorParams = {
    specialityId: number
}
export const useDoctor = ({
    specialityId
}: UseDoctorParams) => {
    const QueryConsultKey = 'DOCTOR_QUERY'
    const pushToast = useToastStack()
    const authContext = useAuth()
    const httpService = new HttpService(authContext)
    const doctorService = new DoctorService(httpService);

    const fetchDoctor = useQuery<unknown, ApiError, Doctor[]>({
        enabled: !!specialityId,
        queryKey: [QueryConsultKey],
        queryFn: ({ signal }) => {
            const source = HttpService.cancelToken()
            const promise = doctorService.list(specialityId)
            signal?.addEventListener('abort', () => source.cancel())
            return promise
        },
        onError: (error) => {
            pushToast(`Erro ao listar médicos: ${error.message}`, {
                type: 'error',
            });
        },
    });

    return {
        fetchDoctor
    };
};
