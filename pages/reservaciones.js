import { useEffect, useState } from 'react'
import Head from 'next/head'
import NavBarMobile from 'components/NavBarMobile'
import ReservacionesNavidad from 'layouts/Pages/reservaciones-navidad'

export default function Reservaciones() {
  const [windowDimension, setWindowDimension] = useState(null)

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

      <NavBarMobile />
      <ReservacionesNavidad />
    </div>
  )
}
