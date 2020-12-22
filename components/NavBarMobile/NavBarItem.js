// @ts-nocheck
import { useEffect, useState } from 'react'
import { NavBarMobile } from './styled'
import Link from 'next/link';
import { useRouter } from 'next/router'

const NavBarItem = ({ to, title, Icon }) => {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()


  useEffect(() => {
    if (router.pathname === to) {
      console.log(router.pathname, to)
      setIsActive(isActive)
    }
  }, [])

  return (
    <NavBarMobile.Item className={router.pathname === to ? "active" : ""}>
      <Link href={to}>
        <a>
          <NavBarMobile.Icon>
            <Icon />
          </NavBarMobile.Icon>
          {title}
        </a>
      </Link>
    </NavBarMobile.Item>
  )
}

export default NavBarItem
