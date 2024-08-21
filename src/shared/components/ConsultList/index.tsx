import { useConsult } from '../../../hooks/useConsult'
import LoadingComponent from '../Loading'
import RemoveConsultBtn from '../RemoveConsultBtn'
import {
    Table
} from './styles'
const ConsultList: React.FC = (): JSX.Element => {

    const fetchConsults = useConsult().fetchConsults()
    const consults = fetchConsults.data

    if (fetchConsults.isFetching) {
        return (
            <LoadingComponent/>
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
                                <RemoveConsultBtn consult={item}/>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    )
}

export default ConsultList