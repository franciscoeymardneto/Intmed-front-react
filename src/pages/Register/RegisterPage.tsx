import { useForm } from "react-hook-form";
import Input from "../../shared/components/Input"
import Logo from "../../shared/components/Logo"
import "./RegisterPage.css"
import Button from "../../shared/components/Button";
import FlatButton from "../../shared/components/FlatButton";
import { useNavigate } from "react-router-dom";

type RegisterFormData = {
    first_name: string,
    email: string,
    password: string,
    password2: string
}
const RegisterPage: React.FC = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const navigate = useNavigate();

    function handleNavigateToLogin() {
        navigate("/login")
    }

    function onSubmit(data: RegisterFormData) {
        console.log("Form Data:", data);
    };

    return (
        <div className="container">
            <main>
                <Logo />
                <p>Crie sua conta</p>
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        label="Nome"
                        placeholder="Ex: João Da Silva"
                        {...register("first_name", {
                            required: "Nome é obrigatório, por favor digite seu nome."
                        })}
                        errorMessage={errors.first_name?.message}
                    />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Ex: joao@example.com"
                        {...register("email", {
                            required: "Email é obrigatório, por favor digite seu email.",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Email inválido, por favor digite um email válido.",
                            },
                        })}
                        errorMessage={errors.email?.message}
                    />
                    <Input
                        type="password"
                        label="Senha"
                        placeholder="Digite sua Senha"
                        {...register("password", {
                            required: "Senha é obrigatória, por favor digite sua senha."
                        })}
                        errorMessage={errors.password?.message}
                    />

                    <Input
                        type="password"
                        label="Confirmar Senha"
                        placeholder="Confirme sua Senha"
                        {...register("password2", {
                            required: "Confirmar a senha é obrigatório, por favor confirme sua senha.",
                            validate: (val: string) => {
                                if (watch("password") != val) {
                                  return "Suas senhas não conferem";
                                }
                              },
                        })}
                        errorMessage={errors.password2?.message}
                    />

                    <footer className="register-form-actions">
                        <FlatButton type="button" onClick={handleNavigateToLogin}>Cancelar</FlatButton>
                        <Button type="submit">Confirmar</Button>
                    </footer>
                </form>

            </main>
        </div>
    )
}

export default RegisterPage