// @ts-nocheck
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { ContainerStyled, NavStyled, FlagStyled } from "./styled"

const NavBar = ({ light }) => {
  return (
    <NavStyled light={light}>
      <ContainerStyled>
        <FlagStyled>
          <Link href='/'>
            <a>
              <Image src='/img/logo.webp' alt='Picture of the author' width={65} height={36} />
            </a>
          </Link>
        </FlagStyled>

        <div>
          <Link href='/reservaciones'>
            <a>
              <span className='route__reservations' style={{ border: '2.5px solid #ffe32c', borderRadius: '20px', padding: '5px' }}>
                Reservaciones
              </span>
            </a>
          </Link>

          <span className='route__contact' style={{ marginLeft: '10px' }}>
            Contactanos
              <span className='tiptext'>En Construcción</span>
          </span>
        </div>
      </ContainerStyled>
    </NavStyled>
  )
}

NavBar.propTypes = {
  light: PropTypes.bool
}

NavBar.defaultProps = {
  light: false
}

export default NavBar
