import { NavBarMobileStyled } from './styled'
import IconContact from './IconContact'
import IconReservations from './IconReservations'
import IconHome from './IconHome'
import NavBarItem from './NavBarItem'

export default function NavBarMobile() {
  return (
    <>
      <NavBarMobileStyled.Wrapper>
        <NavBarMobileStyled.Items>
          <NavBarItem to="/reservaciones" Icon={IconReservations} title="Reservaciones" />
          <NavBarItem to="/" Icon={IconHome} title="Inicio" />
          <NavBarItem to="/contactanos" Icon={IconContact} title="Contáctanos" />
        </NavBarMobileStyled.Items>
      </NavBarMobileStyled.Wrapper>
    </>
  )
}