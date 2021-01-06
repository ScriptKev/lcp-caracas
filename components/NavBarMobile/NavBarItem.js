import { useEffect, useState } from 'react'
import { NavBarMobileStyled } from './styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBarItem = ({ to = '/', title, Icon }) => {
  console.log(Icon)
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === to) {
      console.log(router.pathname, to)
      setIsActive(isActive)
    }
  }, [])

  return (
    <NavBarMobileStyled.Item className={router.pathname === to ? 'active' : ''}>
      <Link href={to}>
        <a>
          <NavBarMobileStyled.Icon>
            <Icon />
          </NavBarMobileStyled.Icon>
          {title}
        </a>
      </Link>
    </NavBarMobileStyled.Item>
  )
}

export default NavBarItem
