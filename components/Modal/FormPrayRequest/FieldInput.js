import { FieldRadioStyled, InputRadioStyled, InputTextStyled, InputTextAreaStyled } from './styled'
import PropTypes from 'prop-types'

const FieldInput = ({ name, type, placeholder, register, rules }) => {
  if (name === 'name')
    return (
      <div>
        <InputTextStyled
          autoComplete="none"
          name={name}
          type={type}
          placeholder={placeholder}
          ref={register(rules)}
        />
      </div>
    )

  if (name === 'email')
    return (
      <div>
        <InputTextStyled
          name={name}
          type={type}
          placeholder={placeholder}
          ref={register(rules)}
        />
      </div>
    )

  if (name === 'prayRequest')
    return (
      <div>
        <InputTextAreaStyled
          name={name}
          placeholder={placeholder}
          cols={35}
          rows={10}
          ref={register(rules)}
        />
      </div>
    )
}

FieldInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rules: PropTypes.object,
}

FieldInput.defaultProps = {
  name: 'Input Name',
  type: 'Input Type',
  placeholder: 'Input Placeholder',
  register: () => 'Input Register',
  rules: {},
}

export default FieldInput
