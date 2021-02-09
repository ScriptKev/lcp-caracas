import Notifications from 'components/Notifications'
import useNotifications from 'hooks/useNotifications'
import { createContext } from 'react'

export const NotificationsContext = createContext([])

export const NotificationsProvider = ({ children }) => {
  const { openNotification, closeNotification, statusNotification, notification } = useNotifications()

  return (
    <NotificationsContext.Provider value={[openNotification, closeNotification, statusNotification]}>
      { notification.isOpen && <Notifications message={notification.message} />}
      {children}
    </NotificationsContext.Provider>
  )
}

