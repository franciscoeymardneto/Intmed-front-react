import { useAuth } from "../../../contexts/AuthContext"
import Button from "../Button/Button"
import Logo from "../Logo"
import ThemeSwitcher from "../ThemeSwitcher"
import { Container,MobileHiddenContainer,MobileShowContainer,UserNameLabel } from "./styles"

const Header: React.FC = (): JSX.Element => {
    const session = useAuth()
    function HandleLogout() {
        session.clearSession()
    }
    return (
        <Container>
            <div>
                <Logo size="small"/>
                <MobileHiddenContainer>
                    <ThemeSwitcher />
                </MobileHiddenContainer>
            </div>
            <div>
                <MobileShowContainer>
                    <ThemeSwitcher />
                </MobileShowContainer>
                <UserNameLabel>{session.getUserSession()?.username}</UserNameLabel>
                <Button type="button" onClick={HandleLogout}>Desconectar</Button>
            </div>
        </Container>
    )
}

export default Header