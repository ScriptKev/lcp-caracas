import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

const totalReservationsFirstService = db
  .collection('reservaciones')
  .doc('totalReservationsFirstService')
const totalReservationsSecondService = db
  .collection('reservaciones')
  .doc('totalReservationsSecondService')
const FieldValue = firebase.firestore.FieldValue

export const TotalReservationsUpdateIncrement = (sheduleService, total) => {
  console.log('Total Reservations Update Increment', sheduleService, total)

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