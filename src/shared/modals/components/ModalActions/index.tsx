import React from "react";
import { ModalActionsProps } from "./types";
import Button from "../../../components/Button/Button";
import { Container } from "./styles";

const ModalActions: React.FC<ModalActionsProps> = ({
    onCancel,
    onConfirm,
    isLoading
}): JSX.Element => {
    return (
        <Container>
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
                disabled={isLoading}
                onClick={onConfirm}
            >
                Desmarcar
            </Button>
        </Container>
    )
}

export default ModalActions