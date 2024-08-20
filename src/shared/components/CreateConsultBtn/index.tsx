import React, { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon";
import { Container } from "./styles";
import CreateConsultModal from "../../modals/CreateConsult";
import { useConsult } from "../../../hooks/useConsult";

const CreateConsultBtn: React.FC = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const createConsult = useConsult().createConsult()

    function toggleModal() {
        setIsModalOpen(!isModalOpen)
    }

    async function handleCreateConsult() {
        // createConsult.mutate(consult.id, {
        //     onSuccess: () => {
        //         toggleModal();
        //     }
        // })
    }
    return (
        <Container>
            <Button
                onClick={toggleModal}
                disabled={createConsult.isLoading}
                $variant="flat"
            >
                <Icon $iconName="add" />
                Nova consulta
            </Button>

            <CreateConsultModal
                isOpen={isModalOpen}
                isLoading={createConsult.isLoading}
                onConfirm={handleCreateConsult}
                toggleModal={toggleModal}
            />
        </Container>
    )
}

export default CreateConsultBtn