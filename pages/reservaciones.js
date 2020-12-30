import { useEffect, useState } from 'react'
import Head from 'next/head'
import NavBarMobile from 'components/NavBarMobile'
import ReservacionesNavidad from 'layouts/Pages/reservaciones-navidad'

export default function Reservaciones() {
  const [windowDimension, setWindowDimension] = useState(null)
  const isMobile = windowDimension <= 640

  const handleResize = () => setWindowDimension(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
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

      {isMobile && <NavBarMobile />}
      <ReservacionesNavidad />
    </div>
  )
}
