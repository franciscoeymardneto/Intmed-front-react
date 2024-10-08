import { Consult } from "../../../core/models/consult"

export type CreateConsultModalProps = {
    isOpen: boolean
    isLoading?: boolean
    toggleModal: () => void
}