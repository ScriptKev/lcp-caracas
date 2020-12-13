import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { GlobalStyled, AppLayoutStyled } from './styled'
import { ThemeProvider } from '@emotion/react'
import { Theme } from './themeConfig'

export default function AppLayout({ children }) {
  return (
    <>
      <AppLayoutStyled>
        <GlobalStyled />
        <ThemeProvider theme={Theme}>
          <NavBar />
          {children}
        </ThemeProvider>
      </AppLayoutStyled>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.array.isRequired
}