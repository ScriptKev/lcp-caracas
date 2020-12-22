import HeaderHome from 'components/HeaderHome'
import { useEffect, useState } from 'react'
import MainHome from 'components/MainHome'
import NavBar from 'components/NavBar'
import NavBarMobile from 'components/NavBarMobile'
import Head from 'next/head'

export default function Home() {
  const [windowDimension, setWindowDimension] = useState(null);
  const isMobile = windowDimension <= 640;

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
        <title>La Casa de mi Padre - Donde todos tienen un lugar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        isMobile ?
          <>
            <NavBar onlyFlag />
            <NavBarMobile />
          </>
          :
          <NavBar />
      }
      <HeaderHome />
      <MainHome />
    </>
  )
}
