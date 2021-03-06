
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="title" content="La Casa de mi Padre - Donde todos tienen un lugar" />
          <meta name="description" content="Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar." />
          <meta name="keywords" content="La Casa de mi Padre, lcp caracas, iglesia cristiana, predicas cristianas" />
          <meta name="author" content="La Casa de mi Padre" />
          <meta name="copyright" content="La Casa de mi Padre" />
          <meta name="robots" content="index" />
          <meta name="robots" content="follow" />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-MediumExtObl.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-BlackCond.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-Black.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-Extended.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-LightExt.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Helvetica-Neue/HelveticaNeue-ThinCond.otf" as="font" crossOrigin="" />

          <meta property="og:site_name" content="La Casa de mi Padre - Donde todos tienen un lugar" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lcpcaracas.org/" />
          <meta property="og:title" content="La Casa de mi Padre - Donde todos tienen un lugar" />
          <meta property="og:description" content="Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar." />
          <meta property="og:image" content="https://lcpcaracas.org/img/lcp-public.jpg" />

          <meta name="twitter:image:alt" content="La Casa de mi Padre - Donde todos tienen un lugar" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://lcpcaracas.org/" />
          <meta property="twitter:title" content="La Casa de mi Padre - Donde todos tienen un lugar" />
          <meta property="twitter:description" content="Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar." />
          <meta property="twitter:image" content="https://lcpcaracas.org/img/lcp-public.jpg" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}