import React from "react";
import { CreateConsultModalProps } from "./types";
import { ModalContainer } from "./styles";
import Modal from 'styled-react-modal'
import ModalActions from "../components/ModalActions";

const CreateConsultModal: React.FC<CreateConsultModalProps> = ({
    isOpen,
    isLoading,
    onConfirm,
    toggleModal
}): JSX.Element => {
    return (
        <Modal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
        >
            <ModalContainer>
                
                <ModalActions
                    isLoading={isLoading}
                    onConfirm={onConfirm}
                    onCancel={toggleModal}
                />
            </ModalContainer >
        </Modal >
    )
}

export default CreateConsultModal