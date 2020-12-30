import { useEffect, useState } from 'react'
import HeaderHome from 'components/HeaderHome'
import MainHome from 'components/MainHome'
import NavBar from 'components/NavBar'
import NavBarMobile from 'components/NavBarMobile'
import Head from 'next/head'

export default function Home() {
  const [windowDimension, setWindowDimension] = useState(null)
  const isMobile = windowDimension <= 640

  const handleResize = () => setWindowDimension(window.innerWidth)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Donde todos tienen un lugar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        isMobile
          ? <NavBar onlyFlag />
          : <NavBar />
      }

      <NavBarMobile />
      <HeaderHome />
      <MainHome />
    </>
  )
}