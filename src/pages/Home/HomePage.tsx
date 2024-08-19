import Button from "../../shared/components/Button/Button"
import ConsultList from "../../shared/components/ConsultList"
import Header from "../../shared/components/Header"
import Icon from "../../shared/components/Icon"
import { ConsultsListContainer, ConsultsListHeader, Container } from "./styles"

const HomePage: React.FC = (): JSX.Element => {
 
    return (
        <Container>
            <Header/>
            <ConsultsListContainer>
                <ConsultsListHeader>
                    <p>Consulta Clínica</p>
                    <Button $variant="flat">
                        <Icon $iconName="add"/>
                        Nova consulta
                    </Button>
                </ConsultsListHeader>
                <ConsultList/>
            </ConsultsListContainer>
        </Container>
    )
}

export default HomePage