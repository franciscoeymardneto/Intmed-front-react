import { useMutation } from "react-query"

import { HttpService } from "../core/services/http-service"
import { AuthService } from "../core/services/auth-service"
import { useToastStack } from "../contexts/ToastContext";
import { ApiLoginResponse } from "../core/dto/api/login.api.dto";
import { ApiError } from "../core/errors/api-error";

type LoginBody = {
    username: string
    password: string
}

const authService = new AuthService(new HttpService);

export const useLogin = () => {
    const pushToast = useToastStack()

    return useMutation<ApiLoginResponse, ApiError, LoginBody>({
        mutationFn: async (body) => {
            return await authService.login(body.username, body.password)
        },
        onSuccess: (data) => {
            pushToast(`Bem vindo(a) ${data.username}`,{
                type: 'success',
            });
        },
        onError: (error) => {
            pushToast(`Erro ao fazer login: ${error.message}`,{
                type: 'error',
            });
        },
    })
}