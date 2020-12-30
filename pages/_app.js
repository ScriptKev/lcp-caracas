import AppLayout from 'layouts/App'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'context/ModalContext'
import { theme } from 'layouts/App/themeConfig'
import SEO from 'utils/SEO'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppLayout>
          <SEO>
            <Component {...pageProps} />
          </SEO>
        </AppLayout>
      </ModalProvider>
    </ThemeProvider>
  )
}