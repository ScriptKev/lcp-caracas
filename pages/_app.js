import AppLayout from 'layouts/App'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'context/ModalContext'
import { theme } from 'layouts/App/themeConfig'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ModalProvider>
    </ThemeProvider>
  )
}