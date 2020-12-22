import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { NavBar, NavBarMobile } from './styled'
import IconContact from './IconContact'
import IconReservations from './IconReservations'
import IconHome from './IconHome'
import NavBarItem from './NavBarItem';

const Nav = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const isMobile = windowDimension <= 640;

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <>
      {
        isMobile ?
          (
            <NavBarMobile.Wrapper>
              <NavBarMobile.Items>
                <NavBarItem
                  to='/reservaciones'
                  Icon={IconReservations}
                  title='Reservaciones'
                />
                <NavBarItem
                  to='/'
                  Icon={IconHome}
                  title='Inicio'
                />
                <NavBarItem
                  to='/contactanos'
                  Icon={IconContact}
                  title='Contactanos'
                />
              </NavBarMobile.Items>
            </NavBarMobile.Wrapper>
          ) : (
            <NavBar.Wrapper>
              <NavBar.Logo>Logo</NavBar.Logo>
              <NavBar.Items>
                <NavBar.Item>Home</NavBar.Item>
                <NavBar.Item>Blog</NavBar.Item>
              </NavBar.Items>
            </NavBar.Wrapper>
          )
      }
    </>
  )
}

export default Nav
