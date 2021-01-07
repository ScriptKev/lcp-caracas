import Image from 'next/image'
import { ContainerStyled, HeaderBg, HeaderStyled, SloganStyled } from './styled'

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <HeaderBg>
        <Image
          src="/img/HeaderBg-enero-2020.webp"
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
          <h1 style={{ textShadow: '1px 1px 7px black' }}>
            "Que el Dios de la <em>esperanza</em> <br />
            los llene de toda alegría y paz <br />
            a ustedes que creen en Él". <br />
          </h1>
          <div className='header__quote'>Rom. 15:13</div>

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
