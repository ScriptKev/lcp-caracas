import { FieldRadioStyled, InputRadioStyled, InputTextStyled } from './styled'
import PropTypes from 'prop-types'

const FieldInput = ({ name, type, placeholder, register, rules, value, id, labelTitle }) => {
  if (name === 'name')
    return (
      <div>
        <InputTextStyled autoComplete='none' name={name} type={type} placeholder={placeholder} ref={register(rules)} />
      </div>
    )

  if (name === 'lastname')
    return (
      <div>
        <InputTextStyled autoComplete='none' name={name} type={type} placeholder={placeholder} ref={register(rules)} />
      </div>
    )

  if (name === 'phone')
    return (
      <div>
        <InputTextStyled name={name} type={type} placeholder={placeholder} ref={register(rules)} />
      </div>
    )

  if (name === 'email')
    return (
      <div>
        <InputTextStyled name={name} type={type} placeholder={placeholder} ref={register(rules)} />
      </div>
    )

  if (name === 'worshipShedule')
    return (
      <FieldRadioStyled>
        <InputRadioStyled id={id} name={name} type={type} value={value} ref={register(rules)} />
        <label htmlFor='worshipShedule__First'>{labelTitle}</label>
      </FieldRadioStyled>
    )
}

FieldInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rules: PropTypes.object,
  value: PropTypes.string,
  id: PropTypes.string,
  labelTitle: PropTypes.string,
}

FieldInput.defaultProps = {
  name: 'Input Name',
  type: 'Input Type',
  placeholder: 'Input Placeholder',
  register: () => 'Input Register',
  rules: {},
  value: 'Input Value',
  id: 'Input Value',
  labelTitle: 'Input Label Title'
}

export default FieldInput
