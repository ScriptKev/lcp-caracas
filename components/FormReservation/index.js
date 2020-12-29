import { useState, useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Button from 'components/Button'
import { ErrorMsgStyled, FormContainerStyled, FormStyled } from './styled'
import rules from './rulesConfig'
import FieldInput from './FieldInput'
import Select from 'react-select'
import { AddReservation } from 'services/googleApi'
import { ModalContext } from 'context/ModalContext'

const FormReservation = ({ totalReservationsFirstService, totalReservationsSecondService }) => {
  const [openModal, , loadingModal, modalData] = useContext(ModalContext)
  const [disableBtn, setDisableBtn] = useState(false)
  const { control, register, handleSubmit, errors, reset } = useForm()
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

  const onSubmit = (data, e) => {
    setDisableBtn(true)
    loadingModal()
    AddReservation(data)
      .then(() => {
        reset()
        setDisableBtn(false)
        modalData(data)
        openModal()
      })
  }

  if (
    totalReservationsFirstService >= 100 &&
    totalReservationsSecondService >= 100
  )
    return <h1 style={{ marginTop: '50px' }}>Sin Cupos</h1>

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormContainerStyled>
        <FieldInput
          name="name"
          placeholder="Nombre"
          register={register}
          rules={rules.name}
          type="text"
        />
        {errors.name && <ErrorMsgStyled>{errors.name.message}</ErrorMsgStyled>}
        <br />

        <FieldInput
          name="lastname"
          placeholder="Apellido"
          register={register}
          rules={rules.lastname}
          type="text"
        />
        {errors.lastname && (
          <ErrorMsgStyled>{errors.lastname.message}</ErrorMsgStyled>
        )}
        <br />

        <FieldInput
          name="phone"
          placeholder="Teléfono"
          register={register}
          rules={rules.phone}
          type="tel"
        />
        {errors.phone && (
          <ErrorMsgStyled>{errors.phone.message}</ErrorMsgStyled>
        )}
        <br />

        <FieldInput
          name="email"
          placeholder="Correo Electrónico"
          register={register}
          rules={rules.email}
          type="email"
        />
        {errors.email && (
          <ErrorMsgStyled>{errors.email.message}</ErrorMsgStyled>
        )}
        <br />

        <Controller
          instanceId="reservations"
          name="reservations"
          control={control}
          options={options}
          as={Select}
          rules={rules.reservations}
          placeholder="Numero de reservaciones"
          register={register}
        />
        {errors.reservations && (
          <ErrorMsgStyled>{errors.reservations.message}</ErrorMsgStyled>
        )}

        <br />
        {totalReservationsFirstService >= 100 ? (
          <span style={{ color: 'red', marginBottom: '10px' }}>
            Primer Servicio - Reservaciones Acabadas
          </span>
        ) : (
            <FieldInput
              value="Primer Servicio"
              name="worshipShedule"
              id="worshipShedule__First"
              register={register}
              rules={rules.worshipShedule}
              type="radio"
              labelTitle="1° Servicio 9:00 a.m."
            />
          )}

        {totalReservationsSecondService >= 100 ? (
          <span style={{ color: 'red', marginTop: '10px' }}>
            Segundo Servicio - Reservaciones Acabadas
          </span>
        ) : (
            <FieldInput
              value="Segundo Servicio"
              name="worshipShedule"
              id="worshipShedule__Second"
              register={register}
              rules={rules.worshipShedule}
              type="radio"
              labelTitle="2° Servicio 11:00 a.m."
            />
          )}
        {errors.worshipShedule && (
          <ErrorMsgStyled>{errors.worshipShedule.message}</ErrorMsgStyled>
        )}
        <br />
        <br />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button disabled={disableBtn} type='submit' title="Reservar" primary />
        </div>
      </FormContainerStyled>
    </FormStyled>
  )
}

export default FormReservation
