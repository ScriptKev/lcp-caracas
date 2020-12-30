import Router from 'next/router'
import Button from 'components/Button'
import { ModalStyled } from './styled'

const Modal = ({ userTicket, closeModal }) => {

  const worshipSheduleDate = Shedule => {
    if (Shedule === 'Primer Servicio') return '1° Servicio 9:00 a.m'
    if (Shedule === 'Segundo Servicio') return '2° Servicio 11:00 a.m'
    else return 'Hubo un error en el horario'
  }

  return (
    <ModalStyled.Container>
      <ModalStyled.Box>
        <span style={{ fontSize: '23px', color: '#1a5187', marginBottom: '10px' }}>
          ¡Reservación Exitosa!
        <br />
          <img
            src="/icons/icon-success.svg"
            alt="success"
            width="40px"
            style={{ marginTop: '10px' }}
          />
        </span>
        <div>
          <span>{userTicket.fullName}</span> <br />
          <span>N° Reservaciones: {userTicket.reservations}</span> <br />
          <span>
            {worshipSheduleDate(userTicket.worshipShedule)}
          </span>
          <br />
        </div>
        <br />
        <Button
          title="Volver al inicio"
          primary
          handleClick={() => {
            closeModal()
            Router.replace('/')
          }}
        />
      </ModalStyled.Box>

    </ModalStyled.Container>
  )
}

export default Modal
