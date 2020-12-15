import Head from 'next/head'
import AppLayout from 'layouts/App'
import { theme } from 'layouts/App/themeConfig'
import { ThemeProvider } from '@emotion/react'
import { ModalProvider } from 'react-modal-hook'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppLayout>
          <Head>
            <meta charSet='utf-8' />
            <meta name='title' content='La Casa de mi Padre - Donde todos tienen un lugar' />
            <meta name='description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
            <meta name='keywords' content='La Casa de mi Padre, lcp caracas, iglesia cristiana, predicas cristianas' />
            <meta name='author' content='La Casa de mi Padre' />
            <meta name='copyright' content='La Casa de mi Padre' />
            <meta name='robots' content='index' />
            <meta name='robots' content='follow' />

            <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-MediumExtObl.otf" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-Black.otf" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-Roman.otf" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-Extended.otf" as="font" crossOrigin="" />

            <meta property="og:site_name" content="La Casa de mi Padre - Donde todos tienen un lugar" />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://lcpcaracas.org/' />
            <meta property='og:title' content='La Casa de mi Padre - Donde todos tienen un lugar' />
            <meta property='og:description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
            <meta property='og:image' content='https://lcpcaracas.org/img/lcp-public.jpg' />

            <meta name="twitter:image:alt" content="La Casa de mi Padre - Donde todos tienen un lugar" />
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content='https://lcpcaracas.org/' />
            <meta property='twitter:title' content='La Casa de mi Padre - Donde todos tienen un lugar' />
            <meta property='twitter:description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
            <meta property='twitter:image' content='https://lcpcaracas.org/img/lcp-public.jpg' />
          </Head>

          <Component {...pageProps} />
        </AppLayout>
      </ModalProvider>
    </ThemeProvider>
  )
}
