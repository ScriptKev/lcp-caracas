import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignIn, SignOut } from 'services/firebase'

export default function Login() {
  const [loginActive, setLoginActive] = useState(false)
  const [user, setUser] = useState({ email: '', password: '' })
  const { register, handleSubmit, errors } = useForm()

  const onLogin = ({ email, password }) => {
    setUser({ email, password })
    const userAuth = SignIn(user.email, user.password)
    console.log(userAuth)
  }

  const onSignOut = () => {
    SignOut()
  }

  if (!loginActive)
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
      <form onSubmit={handleSubmit(onLogin)} style={{
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
        <button style={{ margin: '10px 0' }} type='submit'>Iniciar Seccion</button>
        <button onClick={onSignOut}>SIgnOut</button>
        {errors.email && <span>Email is required</span>}
        {errors.password && <span>Password is required</span>}
      </form>
      <Link href='/'>
        <a style={{ marginTop: '20px' }}>
          Home
        </a>
      </Link>

      <Link href='/register'>
        <a style={{ marginTop: '20px', color: 'rgb(255, 192, 0)' }}>
          Crear Cuenta
        </a>
      </Link>
    </div>
  )
}
