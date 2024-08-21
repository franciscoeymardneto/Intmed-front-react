import React from "react";
import { ModalActionsProps } from "./types";
import Button from "../../../components/Button/Button";
import { Container } from "./styles";

const ModalActions: React.FC<ModalActionsProps> = ({
    onCancel,
    onConfirm,
    isLoading,
    disabledConfirm
}): JSX.Element => {
    return (
        <Container id="modal-actions-container">
            <Button
                type='button'
                disabled={isLoading}
                onClick={onCancel}
            >
                Cancelar
            </Button>
            <Button
                type='submit'
                $variant='flat'
                disabled={isLoading || disabledConfirm}
                onClick={onConfirm}
            >
                Desmarcar
            </Button>
        </Container>
    )
}

export default ModalActions