import HeaderHome from 'components/HeaderHome'
import MainHome from 'components/MainHome'
import NavBar from 'components/NavBar'
import Head from 'next/head'

export default function Home() {
  console.log(
    'vercel variables cuarto intento',
    process.env.NEXT_PUBLIC_TAB_SHEET_ID,
    process.env.NEXT_PUBLIC_LCP_FIREBASE_CONFIG
  )

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
