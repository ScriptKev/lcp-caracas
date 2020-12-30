import ThemeSnow from './ThemeSnow'
import { GlobalStyled, AppLayoutStyled } from './styled'
export default function AppLayout({ children }) {
  return (
    <>
      <AppLayoutStyled>
        <ThemeSnow />
        <GlobalStyled />
        {children}
      </AppLayoutStyled>
    </>
  )
}
