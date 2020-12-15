import HeaderHome from 'components/HeaderHome'
import MainHome from 'components/MainHome'
import NavBar from 'components/NavBar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Donde todos tienen un lugar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <HeaderHome />
      <MainHome />
    </>
  )
}
