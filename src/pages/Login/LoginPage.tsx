import { useForm } from 'react-hook-form';
import Input from '../../shared/components/Input'
import Logo from '../../shared/components/Logo'
import Button from '../../shared/components/Button/Button';
import Checkbox from '../../shared/components/Checkbox';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import {
    Container,
    LoginForm,
    LoginFormActions,
    LoginFormTitleContainer,
    Main
} from './styles'
import ThemeSwitcher from '../../shared/components/ThemeSwitcher';

type LoginFormData = {
    username: string
    password: string
}
const LoginPage: React.FC = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const navigate = useNavigate();

    const loginMutation = useLogin();

    function handleNavigateToRegister() {
        navigate('/register')
    }

    async function onSubmit(data: LoginFormData) {
        loginMutation.mutate({
            password: data.password,
            username: data.username
        })
    };

    return (
        <Container>
            <Main>
                <LoginFormTitleContainer>
                    <Logo />
                    <ThemeSwitcher />
                </LoginFormTitleContainer>
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="email"
                        label="Email:"
                        placeholder="Digite seu Email"
                        {...register('username', {
                            required: 'Email é obrigatório, por favor digite seu email.',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Email inválido, por favor digite um email válido.',
                            },
                        })}
                        errorMessage={errors.username?.message}
                    />
                    <Input
                        type="password"
                        placeholder="Digite sua Senha"
                        label='Senha:'
                        {...register('password', {
                            required: 'Senha é obrigatória, por favor digite sua senha.'
                        })}
                        errorMessage={errors.password?.message}
                    />
                    <div>
                        <Checkbox
                            label='Lembrar minha senha'
                        />

                    </div>
                    <LoginFormActions>
                        <Button
                            type='button'
                            onClick={handleNavigateToRegister}
                            disabled={loginMutation.isLoading}
                        >
                            Criar Conta
                        </Button>
                        <Button type='submit' $variant='flat' disabled={loginMutation.isLoading}>Acessar</Button>
                    </LoginFormActions>
                </LoginForm>

            </Main>
        </Container>
    )
}

export default LoginPage