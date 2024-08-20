import React, { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon";
import { Container } from "./styles";
import { RemoveConsultBtnProps } from "./types";
import RemoveConsultModal from "../../modals/RemoveConsult";
import { useConsult } from "../../../hooks/useConsult";

const RemoveConsultBtn: React.FC<RemoveConsultBtnProps> = ({consult}): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteConsult = useConsult().deleteConsult()

    function toggleModal() {
        setIsModalOpen(!isModalOpen)
    }

    async function handleRemoveConsult(){
        await deleteConsult.mutate(consult.id, {
            onSuccess: () => {
                toggleModal();
            }
        })
    }
    return (
        <Container>
            <Button 
                onClick={toggleModal}
                disabled={deleteConsult.isLoading}
            >
                <Icon $iconName="close" $size='15px' />
                Desmarcar
            </Button>

            <RemoveConsultModal 
                consult={consult}
                isOpen={isModalOpen}
                isLoading={deleteConsult.isLoading}
                onConfirm={handleRemoveConsult}
                toggleModal={toggleModal}
            />
        </Container>
    )
}

export default RemoveConsultBtn