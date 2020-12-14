import PropTypes from 'prop-types'
import { ButtonStyled } from './styled'

const Button = ({ type, title, handleClick, primary, secondary }) => {
  if (primary) return <ButtonStyled {...primary} primary type={type} onClick={handleClick}>{title}</ButtonStyled>
  if (secondary) return <ButtonStyled {...secondary} type={type} onClick={handleClick}>{title}</ButtonStyled>
  if (!primary && !secondary) return <ButtonStyled type={type} onClick={handleClick}>{title}</ButtonStyled>
}

Button.proptypes = {
  handleClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Button.defaultProps = {
  handleClick: () => console.log('Default handleClick'),
  primary: false,
  secondary: false,
  type: 'button',
  title: 'Default Button',
};
export default Button
