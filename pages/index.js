import HeaderHome from 'components/HeaderHome'
import MainHome from 'components/MainHome'
import NavBar from 'components/NavBar'
import Head from 'next/head'

export default function Home() {
  console.log('vercel variables', process.env.GOOGLE_SHEETS_BASE_URL, process.env.FIREBASE_CONFIG)
  console.log(
    'vercel variables segundo intento',
    process.env.VERCEL_ENV_GOOGLE_SHEETS_BASE_URL,
    process.env.FIREBASE_CONFIG_FIREBASE_CONFIG
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
