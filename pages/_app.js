import AppLayout from 'layouts/App'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'context/ModalContext'
import { theme } from 'layouts/App/themeConfig'
import { NotificationsProvider } from 'context/NotificationsContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NotificationsProvider>
        <ModalProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ModalProvider>
      </NotificationsProvider>
    </ThemeProvider>
  )
}