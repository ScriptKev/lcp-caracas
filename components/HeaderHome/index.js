import { ContainerStyled, HeaderStyled } from './styled';

const HeaderHome = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <div className="header__title">
          <h1>La Casa de mi padre</h1>
        </div>

        <div className="header__direction">
          <p>Edf. Santa Fe, nivel Mezzanina. Calle Tito Salas. Bellas Artes – Caracas.</p>
          <p>Teléfonos: 0212 -578 5969 / 0424-149 8800</p>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  )
}

export default HeaderHome
