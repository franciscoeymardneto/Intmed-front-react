import ConsultList from "../../shared/components/ConsultList"
import CreateConsultBtn from "../../shared/components/CreateConsultBtn"
import Header from "../../shared/components/Header"
import { ConsultsListContainer, ConsultsListHeader, Container } from "./styles"

const HomePage: React.FC = (): JSX.Element => {
 
    return (
        <Container>
            <Header/>
            <ConsultsListContainer>
                <ConsultsListHeader>
                    <p>Consulta Clínica</p>
                    <CreateConsultBtn/>
                </ConsultsListHeader>
                <ConsultList/>
            </ConsultsListContainer>
        </Container>
    )
}

export default HomePage