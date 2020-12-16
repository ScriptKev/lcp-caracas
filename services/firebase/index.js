import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = process.env.NEXT_PUBLIC_LCP_FIREBASE_CONFIG;

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

const totalReservationsFirstService = db.collection('reservaciones').doc('totalReservationsFirstService')
const totalReservationsSecondService = db.collection('reservaciones').doc('totalReservationsSecondService')
const FieldValue = firebase.firestore.FieldValue

export const TotalReservationsUpdateIncrement = (sheduleService, total) => {
  console.log('Total Reservations Update Increment', sheduleService, total)

  if (sheduleService === 'Primer Servicio') {
    totalReservationsFirstService
      .update({
        total: FieldValue.increment(total)
      }).then(() => console.log('Reservaciones total sumando: ', total, 'reservaciones'))

  } else if (sheduleService === 'Segundo Servicio') {
    totalReservationsSecondService
      .update({
        total: FieldValue.increment(total)
      }).then(() => console.log('Reservaciones total sumando: ', total, 'reservaciones'))
  }
}