import { useForm } from 'react-hook-form';
import Input from '../../shared/components/Input'
import Logo from '../../shared/components/Logo'
import './LoginPage.css'

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

    const onSubmit = (data: LoginFormData) => {
        console.log('Form Data:', data);
    };

    return (
        <div className='container'>
            <main>
                <Logo />
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="email"
                        label='Email'
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
                        label='Senha'
                        {...register('password', {
                            required: 'Senha é obrigatória, por favor digite sua senha.'
                        })}
                        errorMessage={errors.password?.message}
                    />
                    <button type="submit">Login</button>
                </form>

            </main>
        </div>
    )
}

export default LoginPage