// @ts-nocheck
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useModal } from 'react-modal-hook'
import { db } from 'services/firebase'
import Button from 'components/Button'
import ReactModal from 'react-modal'
import NavBar from 'components/NavBar'
import FormReservation from 'components/FormReservation'
import NavBarMobile from 'components/NavBarMobile'
import { FormBgStyled, FormSeccionStyled } from 'layouts/Pages/ReservacionesLayout'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default function Reservaciones() {
  const router = useRouter()
  const [reservationsStatus, setReservationsStatus] = useState(true)
  const [windowDimension, setWindowDimension] = useState(null);
  const [totalReservationsFirstService, setTotalReservationsFirstService] = useState(0)
  const [totalReservationsSecondService, setTotalReservationsSecondService] = useState(0)
  const isMobile = windowDimension <= 640;

  const handleResize = () => setWindowDimension(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    if (reservationsStatus) {
      db
        .collection('reservaciones')
        .onSnapshot(({ docs }) => {
          docs.forEach(doc => {
            if (doc.id === 'totalReservationsFirstService') {
              setTotalReservationsFirstService(doc.data().total)
            } else if (doc.id === 'totalReservationsSecondService') {
              setTotalReservationsSecondService(doc.data().total)
            } else {
              console.error('No se ha encontrado el documento')
            }
          })
        })
    }
  }, [])

  const [showModal, hideModal] = useModal(() => (
    <ReactModal style={customStyles} isOpen>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <span style={{ fontSize: '25px', color: '#1a5187', marginBottom: '10px' }}>¡Reservación Exitosa!
          <br />
          <img src='/icons/icon-success.svg' alt='success' width='40px' style={{ marginTop: '10px' }} /></span>
        <Button title='Volver al inicio' primary handleClick={() => router.push('/')} />
      </div>
    </ReactModal>
  ))

  return (
    <div id='reservations'>
      <Head>
        <title>La Casa de mi Padre - Reservaciones</title>
        <meta name="description" content="Iglesia cristiana - La Casa de mi Padre - Reservaciones" />
        <meta name="keywords" content="Realiza una reservacion en la iglesia La Casa de mi Padre" />
      </Head>

      {
        isMobile ? <NavBarMobile /> : <NavBar light />
      }
      <main
        style={{
          paddingTop: isMobile ? '20px' : '130px',
          paddingBottom: isMobile && '70px'
        }}
      >
        {
          reservationsStatus ?
            <>
              <FormBgStyled />
              <FormSeccionStyled>
                <FormReservation
                  totalReservationsFirstService={totalReservationsFirstService}
                  totalReservationsSecondService={totalReservationsSecondService}
                  openModal={showModal}
                />
              </FormSeccionStyled>
            </>
            :
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              fontFamily: 'Helvetica Neue',
              fontWeight: 'normal',
              textAlign: 'center'
            }}>
              <h1 style={{ textAlign: 'center' }}>Reservaciones deshabilitadas</h1>
              <p style={{
                fontFamily: 'Helvetica Neue',
                fontWeight: '300'
              }}>Se esta realizando un mantenimiento, por favor espere.</p>
            </div>
        }
      </main>
    </div>
  )
}
