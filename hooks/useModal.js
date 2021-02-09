import { useState } from 'react'

const useModal = () => {
  const [stateModal, setModalState] = useState({ isOpen: false, isLoading: false, error: null })
  const [dataModal, setDataModal] = useState({ fullName: '', worshipShedule: '', reservations: 0 })

  const modalData = (data) => {
    const { name, lastname, reservations: { value }, worshipShedule } = data

    setDataModal({
      ...dataModal,
      fullName: `${name} ${lastname}`,
      reservations: value,
      worshipShedule
    })

  }

  const resetDataModal = () => setDataModal({ fullName: '', worshipShedule: '', reservations: 0 })
  const openModal = () => setModalState({ ...stateModal, isOpen: true })
  const closeModal = () => setModalState({ ...stateModal, isOpen: false })
  const loadingModal = () => { setModalState({ ...stateModal, isLoading: true }) }
  const loadedModal = () => { setModalState({ ...stateModal, isLoading: false }) }

  return { openModal, closeModal, loadingModal, stateModal, modalData, dataModal, loadedModal, resetDataModal }
}

export default useModal