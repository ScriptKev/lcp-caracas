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
