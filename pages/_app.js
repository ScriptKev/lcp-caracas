import Head from 'next/head'
import AppLayout from 'layouts/App'

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Iglesia cristiana - La Casa de mi Padre" />
        <meta name="keywords" content="La Casa de mi Padre, lcp caracas, iglesia, cristiana" />
        <meta name="author" content="La Casa de mi Padre" />
        <meta name="copyright" content="La Casa de mi Padre" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
      </Head>

      <Component {...pageProps} />
    </AppLayout>
  )
}
