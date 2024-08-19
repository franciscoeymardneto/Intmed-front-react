import { useMutation } from "react-query"

import { HttpService } from "../core/services/http-service"
import { AuthService } from "../core/services/auth-service"
import { useToastStack } from "../contexts/ToastContext";
import { ApiLoginResponse, ApiLoginResquest } from "../core/dto/api/login.api.dto";
import { ApiError } from "../core/errors/api-error";
import { useAuth } from "../contexts/AuthContext";

export const useLogin = () => {
    const authContext = useAuth()
    const authService = new AuthService(new HttpService(authContext));
    const pushToast = useToastStack()

    return useMutation<ApiLoginResponse, ApiError, ApiLoginResquest>({
        mutationFn: async (body) => {
            return await authService.login(body)
        },
        onSuccess: (data) => {
            pushToast(`Bem vindo(a) ${data.username}`,{
                type: 'success',
            });

            authContext.setUserSession(data)
        },
        onError: (error) => {
            pushToast(`Erro ao fazer login: ${error.message}`,{
                type: 'error',
            });
        },
    })
}