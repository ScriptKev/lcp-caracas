import Router from 'next/router'
import Button from 'components/Button'
import { useContext } from 'react'
import { ModalContext } from 'context/ModalContext'

const TicketReservation = ({ userTicket, closeModal }) => {
  const [, , , , , resetDataModal] = useContext(ModalContext)

  const worshipSheduleDate = (Shedule) => {
    if (Shedule === 'Primer Servicio') return 'Hora: 9:00 a.m'
    if (Shedule === 'Segundo Servicio') return 'Hora: 11:00 a.m'
    if (Shedule === 'Tercer Servicio') return 'Hora: 12:30 p.m'
    else return 'Hubo un error en el horario'
  }

  return (
    <div>
      <span style={{ fontSize: '18px', color: '#1a5187', marginBottom: '10px' }}>
        ¡Reservación Exitosa!
        <br />
        <img src='/icons/icon-success.svg' alt='success' width='30px' style={{ marginTop: '10px' }} />
      </span>
      <div>
        <span>{userTicket.fullName}</span> <br />
        <span>Reservó: {userTicket.reservations}</span> <br />
        <span>{worshipSheduleDate(userTicket.worshipShedule)}</span>
        <br />
      </div>
      <br />
      <Button
        title='Volver al inicio'
        primary
        handleClick={() => {
          closeModal()
          Router.replace('/')
          resetDataModal()
        }}
      />
    </div>
  )
}

export default TicketReservation
