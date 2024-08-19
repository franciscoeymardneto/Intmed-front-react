import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAuth } from '../contexts/AuthContext';
import { ConsultService } from '../core/services/consult-service';
import { HttpService } from '../core/services/http-service';
import { Consult } from '../core/models/consult';
import { ApiError } from '../core/errors/api-error';
import { useToastStack } from '../contexts/ToastContext';
import { CreateConsultApi } from '../core/dto/api/consult.api.dto';


export const useConsult = () => {
    const QueryConsultKey = 'USER_CONSULTS'
    const authContext = useAuth();
    const queryClient = useQueryClient();
    const pushToast = useToastStack()
    const userId = authContext.getUserSession()!!.userid
    const httpService = new HttpService(authContext)
    const consultService = new ConsultService(httpService, authContext);

    const fetchConsults = useQuery<unknown, ApiError, Consult[]>({
        enabled: !!userId,
        queryKey: [QueryConsultKey, { clientId: userId }],
        queryFn: ({ signal }) => {
            const source = HttpService.cancelToken()
            const promise = consultService.list()
            signal?.addEventListener('abort', () => source.cancel())
            return promise
        },
        onError: (error) => {
            pushToast(`Erro ao listar consultas: ${error.message}`, {
                type: 'error',
            });
        },
    });

    const createConsult = useMutation<Consult, ApiError, CreateConsultApi>({
        mutationFn: async (body) => {
            return await consultService.create(body)
        },
        onSuccess: () => {
            pushToast(`Consulta criada com sucesso!`, {
                type: 'success',
            });

            queryClient.invalidateQueries(QueryConsultKey);
        },
        onError: (error) => {
            pushToast(`Erro ao criar consulta: ${error.message}`, {
                type: 'error',
            });
        },
    })


    const deleteConsult = useMutation<void, Error, number>({
        mutationFn: async (consultId) => {
            return await consultService.delete(consultId)
        },
        onSuccess: () => {
            pushToast(`Consulta desmarcada com sucesso!`, {
                type: 'success',
            });

            queryClient.invalidateQueries(QueryConsultKey);
        },
        onError: (error) => {
            pushToast(`Erro ao desmarcar consulta: ${error.message}`, {
                type: 'error',
            });
        },
    })

    return {
        fetchConsults,
        createConsult,
        deleteConsult,
    };
};
