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
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])


  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

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
            <h1>Contactanos</h1>
            <h3>La Casa de mi Padre</h3>
            <p>Dejanos tu mensaje!</p>
          </ContactTitleStyled>

          <ContactFormStyled>
            <form>
              <input type='text' placeholder='Nombre' />
            </form>
          </ContactFormStyled>

          <ContactMapStyled>
            <div style={{ padding: '0 50px' }}>
              <Map />
            </div>
          </ContactMapStyled>
        </GridStyled>
      </MainStyled>
    </>
  )
}
