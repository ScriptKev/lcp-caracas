import { ContainerStyled, HeaderStyled } from './styled';

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <div className="header__title">
          <h1>La Casa de mi padre</h1>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  )
}

export default HeaderHome
