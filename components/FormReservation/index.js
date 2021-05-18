import { useState, useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Button from 'components/Button'
import { ErrorMsgStyled, FormContainerStyled, FormStyled } from './styled'
import rules from './rulesConfig'
import FieldInput from './FieldInput'
import Select from 'react-select'
import { AddReservation } from 'services/googleApi'
import { ModalContext } from 'context/ModalContext'
import ChipError from './ChipError'
import { db } from 'services/firebase'

const FormReservation = ({ totalReservationsFirstService, totalReservationsSecondService, totalReservationsTertiaryService }) => {
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

  const onSubmit = (data) => {
    console.log(data)
    setDisableBtn(true)
    loadingModal()
    AddReservation(data).then(() => {
      reset()
      setDisableBtn(false)
      modalData(data)
      openModal()

      const date = new Date()
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      const dateLocal = date.toLocaleDateString('es-ES', options)

      db.collection('usuariosReservados')
        .add({
          date: dateLocal,
          fullName: `${data.name} ${data.lastname}`,
          phone: data.phone,
          reservations: Number(data.reservations.value),
          schedule: data.worshipShedule,
        })
        .then((docRef) => {
          console.log('Document written with usuariosReservados ID: ', docRef.id)
        })
        .catch((error) => {
          console.error('Error usuariosReservados adding document: ', error)
        })
    })
  }

  if (totalReservationsFirstService >= 60 && totalReservationsSecondService >= 60 && totalReservationsTertiaryService >= 60)
    return <h1 style={{ marginTop: '50px' }}>Sin Cupos</h1>

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

        <FieldInput name='email' placeholder='Correo Electrónico' register={register} rules={rules.email} type='email' />
        {errors.email && <ErrorMsgStyled>{errors.email.message}</ErrorMsgStyled>}
        <br />
        <div style={{ fontSize: '0.9rem' }}>
          <Controller
            instanceId='reservations'
            name='reservations'
            defaultValue={{ value: '1', label: 'Número de reservaciones' }}
            control={control}
            options={options}
            as={Select}
            rules={rules.reservations}
            placeholder='Numero de reservaciones'
            register={register}
          />
        </div>
        {errors.reservations && <ErrorMsgStyled>{errors.reservations.message}</ErrorMsgStyled>}

        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          {totalReservationsFirstService >= 60 ? (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <p style={{ marginRight: '5px' }}>1° Servicio</p> <ChipError title='No disponible' />
            </div>
          ) : (
            <FieldInput
              value='Primer Servicio'
              name='worshipShedule'
              id='worshipShedule__First'
              register={register}
              rules={rules.worshipShedule}
              type='radio'
              labelTitle='1° Servicio 8:30 a.m.'
            />
          )}
          {totalReservationsSecondService >= 60 ? (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <p style={{ marginRight: '5px' }}>2° Servicio</p> <ChipError title='No disponible' />
            </div>
          ) : (
            <FieldInput
              value='Segundo Servicio'
              name='worshipShedule'
              id='worshipShedule__Second'
              register={register}
              rules={rules.worshipShedule}
              type='radio'
              labelTitle='2° Servicio 10:15 a.m.'
            />
          )}
          {totalReservationsTertiaryService >= 60 ? (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <p style={{ marginRight: '5px' }}>1° Servicio</p> <ChipError title='No disponible' />
            </div>
          ) : (
            <FieldInput
              value='Tercer Servicio'
              name='worshipShedule'
              id='worshipShedule__Tertiary'
              register={register}
              rules={rules.worshipShedule}
              type='radio'
              labelTitle='3° Servicio 12:00 p.m.'
            />
          )}
          {errors.worshipShedule && <ErrorMsgStyled>{errors.worshipShedule.message}</ErrorMsgStyled>}
        </div>
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
          <Button disabled={disableBtn} type='submit' title='Reservar' primary />
        </div>
      </FormContainerStyled>
    </FormStyled>
  )
}

export default FormReservation
