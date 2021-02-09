import TicketReservation from './TicketReservation'
import { ModalStyled } from './styled'
import FormPrayRequest from './FormPrayRequest'

const Modal = ({ userTicket, closeModal }) => {
  const empty = { fullName: '', worshipShedule: '', reservations: 0 }
  return (
    <ModalStyled.Container>
      <ModalStyled.Box>
        {
          userTicket.fullName === empty.fullName
            ? <FormPrayRequest />
            : <TicketReservation userTicket={userTicket} closeModal={closeModal} />
        }
      </ModalStyled.Box>
    </ModalStyled.Container>
  )
}

export default Modal
