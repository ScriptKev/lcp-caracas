import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDS0iigtbLHgCHs_jlzo0qJXP3temn_FWI",
  authDomain: "lcp-caracas-a5bf3.firebaseapp.com",
  databaseURL: "https://lcp-caracas-a5bf3.firebaseio.com",
  projectId: "lcp-caracas-a5bf3",
  storageBucket: "lcp-caracas-a5bf3.appspot.com",
  messagingSenderId: "483035691854",
  appId: "1:483035691854:web:64728753a8ef1f0177fc1f",
  measurementId: "G-C3JF25PEP8"
};

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