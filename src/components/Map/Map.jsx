import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Proptypes from 'prop-types'
import CustomMarker from '../CustomMarker/CustomMarker';
export default function Map({markers}) {
  return (
    <MapContainer center={[12.9716, 77.5946]}  zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
   {markers.map((location, index)=>(
       <CustomMarker key={index} position={location}>
       <Popup>
         This is a popup
       </Popup>
     </CustomMarker>
   ))}
    </MapContainer>
  );
}
