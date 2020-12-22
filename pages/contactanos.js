import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from 'components/NavBar'
import NavBarMobile from 'components/NavBarMobile'
import { MainStyled, GridStyled, ContactTitleStyled, ContactFormStyled, ContactMapStyled } from 'layouts/Pages/ContactanosStyled'
import { useMemo, useEffect, useState } from 'react'

export default function Contactanos() {
  const [windowDimension, setWindowDimension] = useState(null)
  const isMobile = windowDimension <= 640

  const Map = useMemo(() => dynamic(
    () => import('components/MapView'),
    {
      loading: () => <p>Cargando mapa...</p>,
      ssr: false
    }
  ), [])

  const handleResize = () => setWindowDimension(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Contactanos</title>
      </Head>

      {
        isMobile ?
          <>
            <NavBar onlyFlag />
            <NavBarMobile />
          </>
          :
          <NavBar light />
      }

      <MainStyled>
        <GridStyled>
          <ContactTitleStyled>
            {/* <h3 >Contactanos</h3>
            <h4>La Casa de mi Padre</h4>
            <p>Dejanos tu mensaje!</p> */}
          </ContactTitleStyled>

          <ContactFormStyled>
            {/* <form>
              <input type='text' placeholder='Nombre' />
            </form> */}
          </ContactFormStyled>

          <ContactMapStyled>
            <h4>Estamos aqui</h4>
            <p>
              Edf. Santa Fe, nivel Mezzanina. Calle Tito Salas. Bellas Artes - Caracas. <br />
              Teléfonos: 0212 - 578.59.69 / 0424 - 149.88.00
            </p>
            <Map />
          </ContactMapStyled>
        </GridStyled>
      </MainStyled>
    </>
  )
}
