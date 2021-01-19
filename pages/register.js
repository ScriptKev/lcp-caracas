import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CreateUser } from 'services/firebase'

export default function Register() {
  const [registerActive, setRegisterActive] = useState(false)
  const [user, setUser] = useState({})
  const { register, handleSubmit, errors } = useForm()
  const router = useRouter()

  const onCreateUser = async ({ email, password }) => {
    CreateUser(email.trim(), password)
      .then(({ user }) => {
        const email = user.email
        const displayName = user.displayName
        const userCreation = user.metadata.creationTime
        const phoneNumber = user.phoneNumber
        const photoURL = user.photoURL
        const id = user.uid
        const refreshToken = user.refreshToken

        setUser({ email, password, displayName, userCreation, phoneNumber, photoURL, id, refreshToken })
        router.replace('/login')
      })
  }

  if (!registerActive)
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <h1>Pagina Deshabilitada</h1>
        <Link href='/'>
          <a style={{ marginTop: '20px', color: 'rgb(255, 192, 0)' }}>
            Regresar a la pagina de inicio
        </a>
        </Link>
      </div>
    )

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <form onSubmit={handleSubmit(onCreateUser)} style={{
        width: 'min-content',
        height: 'min-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <input
          name='email'
          defaultValue=''
          type='email'
          placeholder='Correo'
          ref={register({ required: true })}
        />
        <input
          name='password'
          defaultValue=''
          type='password'
          placeholder='Contraseña'
          ref={register({ required: true })}
        />
        <button style={{ margin: '10px 0' }} type='submit'>Registrar</button>
        {errors.email && <span>Email is required</span>}
        {errors.password && <span>Password is required</span>}
      </form>
      <Link href='/'>
        <a style={{ marginTop: '20px', color: 'rgb(255, 192, 0)' }}>
          Home
        </a>
      </Link>

      <Link href='/login'>
        <a style={{ marginTop: '20px', color: 'rgb(255, 192, 0)' }}>
          Iniciar Session
        </a>
      </Link>
    </div>
  )
}
