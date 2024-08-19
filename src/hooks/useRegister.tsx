import { useMutation } from "react-query"

import { HttpService } from "../core/services/http-service"
import { useToastStack } from "../contexts/ToastContext";
import { ApiError } from "../core/errors/api-error";
import { useAuth } from "../contexts/AuthContext";
import { RegisterService } from "../core/services/register-service";
import { ApiRegisterRequest } from "../core/dto/api/register.api.dto";


export const useRegister = () => {
    const authContext = useAuth()
    const authService = new RegisterService(new HttpService(authContext));
    const pushToast = useToastStack()

    return useMutation<void, ApiError, ApiRegisterRequest>({
        mutationFn: async (body) => {
            await authService.register(body)
        },
        onSuccess: () => {
            pushToast(`Conta criada com sucesso! Faça login para acessar o Medicar!`,{
                type: 'success',
            });
        },
        onError: (error) => {
            pushToast(`Erro ao criar conta: ${error.message}`,{
                type: 'error',
            });
        },
    })
}