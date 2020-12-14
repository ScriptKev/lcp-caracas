import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { ContainerStyled, NavStyled } from "./styled"

const NavBar = () => (
  <NavStyled>
    <ContainerStyled>
      <Link href='/'>
        <a>
          <Image src='/img/logo.webp' alt='Picture of the author' width={65} height={36} />
        </a>
      </Link>

      <Link href='/reservaciones'>
        <a>
          <Button primary title='Reservaciones' />
        </a>
      </Link>
    </ContainerStyled>
  </NavStyled>
)
export default NavBar
