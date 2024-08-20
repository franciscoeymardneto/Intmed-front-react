import { useQuery } from 'react-query';
import { useAuth } from '../contexts/AuthContext';
import { SpecialityService } from '../core/services/speciality-service';
import { HttpService } from '../core/services/http-service';
import { ApiError } from '../core/errors/api-error';
import { useToastStack } from '../contexts/ToastContext';
import { Speciality } from '../core/models/speciality';


export const useSpeciality = () => {
    const QueryConsultKey = 'DOCTOR_SPECIALITIES'
    const pushToast = useToastStack()
    const authContext = useAuth()
    const httpService = new HttpService(authContext)
    const specialityService = new SpecialityService(httpService);

    const fetchSpeciality = useQuery<unknown, ApiError, Speciality[]>({
        queryKey: [QueryConsultKey],
        queryFn: ({ signal }) => {
            const source = HttpService.cancelToken()
            const promise = specialityService.list()
            signal?.addEventListener('abort', () => source.cancel())
            return promise
        },
        onError: (error) => {
            pushToast(`Erro ao listar especialidades: ${error.message}`, {
                type: 'error',
            });
        },
    });

    return {
        fetchSpeciality
    };
};
