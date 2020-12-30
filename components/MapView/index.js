import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'
import { MapViewStyled } from './styled'

const MapView = () => {
  return (
    <MapViewStyled>
      <MapContainer
        center={{ lat: 10.502159125755705, lng: -66.90064118922413 }}
        zoom={18}
        scrollWheelZoom={false}
        id="mapView"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
      </MapContainer>
    </MapViewStyled>
  )
}

export default MapView