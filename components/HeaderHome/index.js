import Image from 'next/image'
import { ContainerStyled, HeaderBg, HeaderStyled, SloganStyled } from './styled'

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <HeaderBg>
        <Image src='/img/HeaderBg-09-05-21.webp' alt='headerBg' width={1920} height={1080} priority objectFit='cover' quality={100} />
      </HeaderBg>
      {/* <ContainerStyled>
        <div className='header__title' style={{ margin: 'auto', textAlign: 'start' }}>
          <h1>
            <i className='prhase1'> ¡Alégrate! </i> <br />
            <small className='prhase2'>TU REY</small> <br />
            <p className='prhase3'>VIENE A TI</p>
          </h1> */}
      {/* <div className='header__quote'>Rom. 5:8</div> */}

      {/* <img
          alt='headerBg'
          src='/img/Letras.webp'
          style={{
            display: 'flex',
            width: '70%',
            margin: 'auto',
            maxWidth: '650px',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '290px'
          }}
        /> */}

      {/* <SloganStyled>
            <h2>
              donde
              <div style={{ color: '#FFC000' }}>todos</div>
              tienen
              <div style={{ color: '#FFC000' }}>un</div>lugar
            </h2>
          </SloganStyled> */}
      {/* </div>
      </ContainerStyled> */}
    </HeaderStyled>
  )
}

export default HeaderHome
