import Image from 'next/image'
import { ContainerStyled, HeaderBg, HeaderStyled, SloganStyled } from './styled'

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <HeaderBg>
        <Image
          src="/img/HeaderBg-14-02-21.webp"
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
          {/* <h1>
            "El <em>amor</em> los<br />
            mantendrá unidos".<br />
          </h1>
          <div className='header__quote'>Col. 3:14</div> */}

          <img
            alt='headerBg'
            src='img/titulo-header-07-02-21.png'
            style={{
              display: 'flex',
              width: '70%',
              margin: 'auto',
              maxWidth: '650px',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: '290px'
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
