import { useState } from 'react'

const useNotifications = () => {
  const [notification, setNotification] = useState({ isOpen: false, message: '' })

  const openNotification = () => {
    setNotification({ ...notification, isOpen: true })

    setTimeout(() => {
      closeNotification()
    }, 3500)
  }

  const closeNotification = () => setNotification({ ...notification, isOpen: false })

  const statusNotification = (resStatus = 500) => {
    resStatus !== 200 && setNotification({ ...notification, message: 'Hubo un error, intente nuevamente.' })
    resStatus === 200 && setNotification({ ...notification, message: 'Peticion enviada.' })
  }

  return { openNotification, closeNotification, statusNotification, notification }
}

export default useNotifications