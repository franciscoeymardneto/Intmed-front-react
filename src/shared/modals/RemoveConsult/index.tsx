import React from "react";
import { RemoveConsultModalProps } from "./types";
import { ModalContainer } from "./styles";
import Modal from 'styled-react-modal'
import ModalActions from "../components/ModalActions";

const RemoveConsultModal: React.FC<RemoveConsultModalProps> = ({
    consult,
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
                <p>Deseja realmente <strong>desmarcar</strong> a consulta do dia
                    <strong>{` ${consult.date} ${consult.hour}`}</strong> com o(a) <strong>{consult.doctor}?</strong>
                </p>
                <ModalActions
                    isLoading={isLoading}
                    onConfirm={onConfirm}
                    onCancel={toggleModal}
                />
            </ModalContainer >
        </Modal >
    )
}

export default RemoveConsultModal