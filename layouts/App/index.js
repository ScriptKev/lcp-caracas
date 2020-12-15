import PropTypes from 'prop-types'
import { GlobalStyled, AppLayoutStyled } from './styled'
export default function AppLayout({ children }) {
  return (
    <>
      <AppLayoutStyled>
        <GlobalStyled />
        {children}
      </AppLayoutStyled>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.array.isRequired
}