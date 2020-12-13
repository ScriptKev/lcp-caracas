import HeaderHome from 'components/HeaderHome'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>La Casa de mi Padre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHome />
    </>
  )
}
