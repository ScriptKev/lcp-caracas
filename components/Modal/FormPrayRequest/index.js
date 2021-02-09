import { useState, useContext } from 'react'
import { ModalContext } from 'context/ModalContext'
import { useForm } from 'react-hook-form'
import Button from 'components/Button'
import { ErrorMsgStyled, FormContainerStyled, FormStyled, PraySuccessStyled } from './styled'
import rules from './rulesConfig'
import FieldInput from './FieldInput'
const { Container, Main, Flex, Message } = PraySuccessStyled

const FormPrayRequest = () => {
  const [, closeModal, loadingModal, , loadedModal] = useContext(ModalContext)
  const [prayResponse, setPrayResponse] = useState({ status: 100, message: 'Sin informacion' })
  const { register, handleSubmit, errors, reset } = useForm()
  const [disableBtn, setDisableBtn] = useState(false)

  const onSubmit = (data) => {
    setDisableBtn(true)
    loadingModal()

    window.fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        reset()
        loadedModal()
        setDisableBtn(false)

        if (res.status === 200) {
          setPrayResponse({ status: res.status, message: 'Peticion enviada' })

          setTimeout(() => {
            setPrayResponse({ status: 100, message: 'Sin informacion' })
          }, 5000)

        } else {
          setPrayResponse({ status: res.status, message: 'Hubo un error.' })

          setTimeout(() => {
            setPrayResponse({ status: 100, message: 'Sin informacion' })
          }, 5000)
        }

      })
      .catch(err => {
        reset()
        loadedModal()
        setDisableBtn(false)
        setPrayResponse({ status: 500, message: 'Hubo un error.' })
        console.error(err)
      })
  }
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormContainerStyled>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Peticion de Oración</h2>
          <div style={{ cursor: 'pointer' }} onClick={() => closeModal()}>X</div>
        </div>
        <br />
        <FieldInput
          name="name"
          placeholder="Nombre y Apellido"
          register={register}
          rules={rules.name}
          type="text"
        />
        {errors.name && <ErrorMsgStyled>{errors.name.message}</ErrorMsgStyled>}

        <FieldInput
          name="email"
          placeholder="Correo Electrónico"
          register={register}
          rules={rules.email}
          type="email"
        />
        {errors.email && <ErrorMsgStyled>{errors.email.message}</ErrorMsgStyled>}

        <FieldInput
          name='prayRequest'
          placeholder='Petición de oración'
          register={register}
          rules={rules.prayRequest}
        />
        {errors.prayRequest && <ErrorMsgStyled>{errors.prayRequest.message}</ErrorMsgStyled>}

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button disabled={disableBtn} type='submit' title='Enviar Peticion' primary />
        </div>
        {
          prayResponse.status === 200 &&
          <Container>
            <Main
              // @ts-ignore
              status={200}>
              <Flex>
                <img
                  src="/icons/icon-success.svg"
                  alt="success"
                  width="25px"
                />
                <Message>Petición enviada.</Message>
              </Flex>
            </Main>
          </Container>
        }
        {
          prayResponse.status >= 400 &&
          <Container>
            <Main
              // @ts-ignore
              status={400}>
              <Flex>
                <img src='/icons/cancel.svg' width='20px' />
                <Message>Hubo un error.</Message>
              </Flex>
            </Main>
          </Container>
        }
      </FormContainerStyled>
    </FormStyled>
  )
}

export default FormPrayRequest
