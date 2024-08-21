export type ModalActionsProps = {
    isLoading?: boolean
    onConfirm?: () => void
    onCancel: () => void
    disabledConfirm?: boolean
}