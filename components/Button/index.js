import PropTypes from 'prop-types'
import { ButtonStyled } from './styled'

const Button = props => {
  const { type, title, handleClick, primary, secondary } = props

  if (primary) return <ButtonStyled {...props} primary type={type} onClick={handleClick}>{title}</ButtonStyled>
  if (secondary) return <ButtonStyled {...props} secondary type={type} onClick={handleClick}>{title}</ButtonStyled>
  if (!primary && !secondary) return <ButtonStyled {...props} type={type} onClick={handleClick}>{title}</ButtonStyled>

}

Button.proptypes = {
  handleClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Button.defaultProps = {
  handleClick: () => console.log('Default handleClick'),
  title: 'Default Button',
  type: 'button'
};
export default Button
