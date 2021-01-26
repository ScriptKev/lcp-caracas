import Image from 'next/image'
import { ContainerStyled, HeaderBg, HeaderStyled, SloganStyled } from './styled'

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <HeaderBg>
        <Image
          src="/img/HeaderBg-31-01-21.webp"
          alt="headerBg"
          width={1920}
          height={1080}
          priority
          objectFit="cover"
          quality={100}
        />
      </HeaderBg>
      <ContainerStyled>
        <div
          className="header__title"
          style={{ margin: 'auto', textAlign: 'start' }}
        >
          {/* <h1 style={{ textShadow: '1px 1px 7px black' }}>
            "Demuéstrale a <em>Dios</em><br />
            que para ti él es<br />
            lo más importante".<br />
          </h1>
          <div className='header__quote'>Prov. 3:9</div> */}

          <img
            alt='headerBg'
            src='img/titulo-header.png'
            style={{
              display: 'flex',
              width: '74%',
              margin: 'auto',
              maxWidth: '800px',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: '300px'
            }}
          />

          {/* <SloganStyled>
            <h2>
              donde
              <div style={{ color: '#FFC000' }}>todos</div>
              tienen
              <div style={{ color: '#FFC000' }}>un</div>lugar
            </h2>
          </SloganStyled> */}
        </div>
      </ContainerStyled>
    </HeaderStyled>
  )
}

export default HeaderHome
