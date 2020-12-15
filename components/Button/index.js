import PropTypes from 'prop-types'
import { ButtonStyled } from './styled'

const Button = ({ type, title, handleClick, primary, secondary, disabled }) => {
  if (primary) return <ButtonStyled {...primary} disabled={disabled} primary type={type} onClick={handleClick}>{title}</ButtonStyled>
  if (secondary) return <ButtonStyled {...secondary} disabled={disabled} type={type} onClick={handleClick}>{title}</ButtonStyled>
  if (!primary && !secondary) return <ButtonStyled disabled={disabled} type={type} onClick={handleClick}>{title}</ButtonStyled>
}

Button.proptypes = {
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Button.defaultProps = {
  disabled: false,
  handleClick: () => { },
  primary: false,
  secondary: false,
  type: 'button',
  title: 'Default Button',
};
export default Button
