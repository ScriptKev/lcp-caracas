import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const Markers = () => {
  return (
    <Marker position={{ lat: 10.502159125755705, lng: -66.90064118922413 }}>
      <Popup>Edificio Santa Fe.</Popup>
    </Marker>
  )
}

export default Markers