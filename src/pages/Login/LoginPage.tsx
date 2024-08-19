import { useForm } from 'react-hook-form';
import Input from '../../shared/components/Input'
import Logo from '../../shared/components/Logo'
import './LoginPage.css'
import Button from '../../shared/components/Button';
import Checkbox from '../../shared/components/CheckBox';
import FlatButton from '../../shared/components/FlatButton';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

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

    function handleNavigateToRegister(){
        navigate('/register')
    }

    async function onSubmit(data: LoginFormData) {
        console.log('Form Data:', data);
        loginMutation.mutate({
            password: data.password,
            username: data.username
        })

        
    };

    return (
        <div className='container'>
            <main>
                <Logo />
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
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
                    <footer className='login-form-actions'>
                        <FlatButton 
                            type='button' 
                            onClick={handleNavigateToRegister}
                            disabled={loginMutation.isLoading}
                        >
                            Criar Conta
                        </FlatButton>
                        <Button type='submit' disabled={loginMutation.isLoading}>Acessar</Button>
                    </footer>
                </form>

            </main>
        </div>
    )
}

export default LoginPage