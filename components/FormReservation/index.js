import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Button from 'components/Button'
import { ErrorMsgStyled, FormContainerStyled, FormStyled } from "./styled"
import rules from './rulesConfig'
import FieldInput from './FieldInput'
import Select from 'react-select'
import { AddReservation } from 'services/googleApi'

const FormReservation = ({ openModal, totalReservationsFirstService, totalReservationsSecondService }) => {
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ]
  const [selectedOption, setSelectedOption] = useState('none');
  const [loading, setLoading] = useState(false)
  const [dataReservation, setDataReservation] = useState([])
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    setLoading(true)
    AddReservation(data, selectedOption)
      .then(() => {
        e.target.reset()
        setSelectedOption('none')
        setLoading(false)
        openModal()
      })

    setDataReservation([
      data.name,
      data.lastname,
      data.email,
      data.phone,
      data.worshipShedule,
      selectedOption
    ])

    console.log('Antes de enviar reservacion', dataReservation)

  }

  const handleTypeSelect = e => {
    setSelectedOption(e.value);
  };

  if (totalReservationsFirstService >= 100 && totalReservationsSecondService >= 100) return <h1 style={{ marginTop: '50px' }}>Sin Cupos</h1>

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormContainerStyled>
        <FieldInput name='name' placeholder='Nombre' register={register} rules={rules.name} type='text' />
        {errors.name && <ErrorMsgStyled>{errors.name.message}</ErrorMsgStyled>}
        <br />

        <FieldInput name='lastname' placeholder='Apellido' register={register} rules={rules.lastname} type='text' />
        {errors.lastname && <ErrorMsgStyled>{errors.lastname.message}</ErrorMsgStyled>}
        <br />

        <FieldInput name='phone' placeholder='Teléfono' register={register} rules={rules.phone} type='tel' />
        {errors.phone && <ErrorMsgStyled>{errors.phone.message}</ErrorMsgStyled>}
        <br />

        <FieldInput name='email' placeholder='Correo Electronico' register={register} rules={rules.email} type='email' />
        {errors.email && <ErrorMsgStyled>{errors.email.message}</ErrorMsgStyled>}
        <br />

        <Select instanceId='reservations' options={options} onChange={handleTypeSelect} placeholder='Numero de Reservaciones' />

        <br />
        {
          totalReservationsFirstService >= 100 ?
            <span style={{ color: 'red', marginBottom: '10px' }}>Primer Servicio - Reservaciones Acabadas</span>
            :
            <FieldInput
              value='Primer Servicio'
              name='worshipShedule'
              id='worshipShedule__First'
              register={register}
              rules={rules.worshipShedule}
              type='radio'
              labelTitle='Primer Servicio - 9:00am'
            />
        }

        {
          totalReservationsSecondService >= 100 ?
            <span style={{ color: 'red', marginTop: '10px' }}>Segundo Servicio - Reservaciones Acabadas</span>
            :
            <FieldInput
              value='Segundo Servicio'
              name='worshipShedule'
              id='worshipShedule__Second'
              register={register}
              rules={rules.worshipShedule}
              type='radio'
              labelTitle='Segundo Servicio - 11:00am'
            />
        }
        {errors.worshipShedule && <ErrorMsgStyled>{errors.worshipShedule.message}</ErrorMsgStyled>}
        <br />
        <br />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button disabled={loading} type='submit' title='Reservar' primary />
        </div>
      </FormContainerStyled>
    </FormStyled>
  )
}

export default FormReservation
