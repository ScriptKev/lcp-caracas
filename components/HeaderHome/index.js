import { ContainerStyled, HeaderStyled, SloganStyled } from './styled';

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <div className="header__title" style={{ margin: 'auto', textAlign: 'start' }}>
          <h1>La Casa
            <br /> de mi Padre</h1>

          <SloganStyled>
            <h2>
              donde
              <div style={{ color: '#ffe32c' }}>todos</div>
              tienen
              <div style={{ color: 'yellow' }}>un</div>lugar</h2>
          </SloganStyled>
        </div>

      </ContainerStyled>
    </HeaderStyled>
  )
}

export default HeaderHome
