import firebase from 'firebase/app'
import config from 'config/main'
import 'firebase/auth'
import 'firebase/firestore'

!firebase.apps.length && firebase.initializeApp(config.FIREBASE)

export const db = firebase.firestore()
export const auth = firebase.auth()

export const loginWithGoogle = () => {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(GoogleProvider)
}

export const CreateUser = async (email, password) => {
  return await auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
      return user
    })
    .catch(console.error);
}

export const SignIn = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('SignIn', user)
      return user
    })
    .catch(console.error)
}

export const SignOut = async () => {
  await auth
    .signOut()
    .then(() => console.log('SignOut'))
    .catch(console.error)
}

export const TotalReservationsUpdateIncrement = (sheduleService, total) => {
  console.log('Total Reservations Update Increment', sheduleService, total)

  const totalReservationsFirstService = db.collection('reservaciones').doc('totalReservationsFirstService')
  const totalReservationsSecondService = db.collection('reservaciones').doc('totalReservationsSecondService')
  const FieldValue = firebase.firestore.FieldValue

  if (sheduleService === 'Primer Servicio') {
    totalReservationsFirstService
      .update({
        total: FieldValue.increment(total),
      })
      .then(() =>
        console.log('Reservaciones total sumando: ', total, 'reservaciones')
      )
  } else if (sheduleService === 'Segundo Servicio') {
    totalReservationsSecondService
      .update({
        total: FieldValue.increment(total),
      })
      .then(() =>
        console.log('Reservaciones total sumando: ', total, 'reservaciones')
      )
  }
}