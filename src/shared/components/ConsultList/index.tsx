import { useConsult } from '../../../hooks/useConsult'
import Button from '../Button/Button'
import {
    Table
} from './styles'
const ConsultList: React.FC = (): JSX.Element => {

    const { fetchConsults } = useConsult()
    const consults = fetchConsults.data

    if (fetchConsults.isFetching) {
        return (
            <div>Carregando...</div>
        )
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>ESPECIALIDADE</th>
                    <th>PROFISSIONAL</th>
                    <th>DATA</th>
                    <th>HORA</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {
                    consults?.map((item, key) => (
                        <tr key={key}>
                            <td>{item.speciality}</td>
                            <td>{item.doctor}</td>
                            <td>{item.date}</td>
                            <td>{item.hour}</td>
                            <td>
                                <Button>Desmarcar</Button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    )
}

export default ConsultList