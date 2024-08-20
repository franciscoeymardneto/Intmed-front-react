import { Consult } from "../../../core/models/consult"

export type RemoveConsultModalProps = {
    consult: Consult
    isOpen: boolean
    isLoading?: boolean
    onConfirm: () => void
    toggleModal: () => void
}