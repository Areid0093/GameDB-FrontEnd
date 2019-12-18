import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants"
import { Modal } from "semantic-ui-react"

export const openModal = (modalType, modalProps) => {
    return {
        type: MODAL_OPEN,
        payload: {
            modalType,
            modalProps
        }
    }
}
export const closeModal = (modalType, modalProps) => {
    return {
        type: MODAL_CLOSE
    }
}