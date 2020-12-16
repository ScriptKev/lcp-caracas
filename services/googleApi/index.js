// import { TotalReservationsUpdateIncrement } from 'services/firebase'

const BASE_URL = process.env.NEXT_PUBLIC_NO_CODE_API_BAES_URL
const TabSheetId = process.env.NEXT_PUBLIC_GOOGLE_DOCS_EXCEL_TAB_SHEET_ID

export const AddReservation = async (reservation) => {
  console.log('Add Reservaton', BASE_URL, TabSheetId)
  console.log('env.Local', process.env.DB_PASS, process.env.DB_USER, process.env.DB_HOST)
  // let { name, lastname, email, phone, worshipShedule, reservations: { value } } = reservation
  // if (email === '' || email === ' ') email = 'Sin correo'
  // const date = new Date();
  // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // const dateLocal = date.toLocaleDateString("es-ES", options)

  // const newReservation = [
  //   dateLocal,
  //   `${name} ${lastname}`,
  //   phone,
  //   email,
  //   Number(value),
  //   worshipShedule,
  // ]

  // try {
  //   const res = await fetch(`${BASE_URL}?tabId=${TabSheetId}`, {
  //     mode: 'cors',
  //     method: "post",
  //     body: JSON.stringify([newReservation]),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   })

  //   const data = await res.json()
  //   console.log('Success:', JSON.stringify(data))

  // } catch (err) {
  //   console.error(err)
  // }

  // TotalReservationsUpdateIncrement(worshipShedule, Number(value))
}