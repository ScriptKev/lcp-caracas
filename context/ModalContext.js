import Modal from 'components/Modal'
import Spinner from 'components/Spinner'
import useModal from 'hooks/useModal'
import { createContext } from 'react'

export const ModalContext = createContext([])

export const ModalProvider = ({ children }) => {
  const { openModal, closeModal, loadingModal, stateModal, modalData, dataModal, loadedModal, resetDataModal } = useModal()

  return (
    <ModalContext.Provider value={[openModal, closeModal, loadingModal, modalData, loadedModal, resetDataModal]}>
      { stateModal.isOpen && <Modal closeModal={closeModal} userTicket={dataModal} />}
      { stateModal.isLoading && <Spinner />}
      {children}
    </ModalContext.Provider>
  )
}

