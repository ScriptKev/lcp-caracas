import { TotalReservationsUpdateIncrement } from 'services/firebase'

const BASE_URL = process.env.NEXT_PUBLIC_NO_CODE_API_BAES_URL
const TabSheetId = process.env.NEXT_PUBLIC_GOOGLE_DOCS_EXCEL_TAB_SHEET_ID

export const AddReservation = async (reservation, selectedOpTion) => {
  const { name, lastname, email, phone, worshipShedule } = reservation
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateLocal = date.toLocaleDateString("es-ES", options)

  const newReservation = [
    dateLocal,
    `${name} ${lastname}`,
    phone,
    email,
    selectedOpTion,
    worshipShedule,
  ]

  try {
    const res = await fetch(`${BASE_URL}?tabId=${TabSheetId}`, {
      mode: 'cors',
      method: "post",
      body: JSON.stringify([newReservation]),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })

    const data = await res.json()
    console.log('Success:', JSON.stringify(data))

  } catch (err) {
    console.error(err)
  }

  TotalReservationsUpdateIncrement(worshipShedule, selectedOpTion)
}