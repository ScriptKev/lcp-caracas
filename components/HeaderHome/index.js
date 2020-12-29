import Image from 'next/image'
import { ContainerStyled, HeaderBg, HeaderStyled, SloganStyled } from './styled'

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <HeaderBg>
        <Image
          src="/img/HeaderBg.webp"
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
          <h1>
            La Casa
            <br /> de mi Padre
          </h1>

          <SloganStyled>
            <h2>
              donde
              <div style={{ color: '#FFC000' }}>todos</div>
              tienen
              <div style={{ color: '#FFC000' }}>un</div>lugar
            </h2>
          </SloganStyled>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  )
}

export default HeaderHome
