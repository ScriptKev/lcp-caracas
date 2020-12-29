import { ChipErrorStyled } from "./styled"

const ChipError = ({ title }) => {
  return (
    <ChipErrorStyled.Container>
      <ChipErrorStyled.Title>
        {title}
      </ChipErrorStyled.Title>
    </ChipErrorStyled.Container>
  )
}

export default ChipError
