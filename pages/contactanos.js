import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from 'components/NavBar'
import NavBarMobile from 'components/NavBarMobile'
import { useMemo, useEffect, useState } from 'react'
import { MainStyled, GridStyled, ContactTitleStyled, ContactFormStyled, ContactMapStyled } from 'layouts/Pages/ContactanosStyled'

export default function Contactanos() {
  const [windowDimension, setWindowDimension] = useState(null)
  const isMobile = windowDimension <= 640

  const Map = useMemo(
    () =>
      dynamic(() => import('components/MapView'), {
        loading: () => <p>Cargando mapa...</p>,
        ssr: false,
      }),
    []
  )

  const handleResize = () => setWindowDimension(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Contactanos</title>
      </Head>

      {
        isMobile
          ? <NavBar onlyFlag />
          : <NavBar light />
      }
      <NavBarMobile />

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
              Edf. Santa Fe, Nivel Mezzanina. <br />
              Av. Sur 21. Entre Av. México y Este 2. <br />
              La Candelaria - Caracas. <br />
              (A media cuadra de la Estación Bellas Artes) <br />
              Telf.: 0212-578-5969 / 0424-149-8800
            </p>
            <Map />
          </ContactMapStyled>
        </GridStyled>
      </MainStyled>
    </>
  )
}