import { useEffect, useState } from 'react'
import Head from 'next/head'
import { db } from 'services/firebase'
import NavBar from 'components/NavBar'
import FormReservation from 'components/FormReservation'
import NavBarMobile from 'components/NavBarMobile'
import { FormBgStyled, FormSeccionStyled } from 'layouts/Pages/ReservacionesLayout'

export default function Reservaciones() {
  const [reservationsStatus, setReservationsStatus] = useState(true)
  const [windowDimension, setWindowDimension] = useState(null)
  const [totalReservationsFirstService, setTotalReservationsFirstService] = useState(0)
  const [totalReservationsSecondService, setTotalReservationsSecondService] = useState(0)
  const isMobile = windowDimension <= 640

  const handleResize = () => setWindowDimension(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (reservationsStatus) {
      db.collection('reservaciones').onSnapshot(({ docs }) => {
        docs.forEach((doc) => {
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

  return (
    <div id="reservations">
      <Head>
        <title>La Casa de mi Padre - Reservaciones</title>
        <meta
          name="description"
          content="Iglesia cristiana - La Casa de mi Padre - Reservaciones"
        />
        <meta
          name="keywords"
          content="Realiza una reservacion en la iglesia La Casa de mi Padre"
        />
      </Head>

      <NavBar light />
      <NavBarMobile />
      <main
        style={{
          paddingTop: isMobile ? '20px' : '130px',
          paddingBottom: isMobile && '70px',
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
                />
              </FormSeccionStyled>
            </>
            :
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontFamily: 'Helvetica Neue',
                fontWeight: 'normal',
                textAlign: 'center',
              }}
            >
              <h1 style={{ textAlign: 'center' }}>
                Reservaciones deshabilitadas
            </h1>
              <p
                style={{
                  fontFamily: 'Helvetica Neue',
                  fontWeight: 300,
                }}
              >
                Se esta realizando un mantenimiento, por favor espere.
            </p>
            </div>
        }
      </main>
    </div>
  )
}
