import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MakrerUrlOnline from "../../assets/marker_online.png";
import MakrerUrlParked from "../../assets/marker_parked.png";
import MakrerUrlIdle from "../../assets/marker_idle.png";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";


const CustomMarker = ({ position, children }) => {
//   const map = useMap();

  const customIcon = L.icon({
    iconUrl: position.status==="Moving"?MakrerUrlOnline:position.status==="Parked"?MakrerUrlParked:MakrerUrlIdle,
    iconSize: [50, 65],
    iconAnchor: [25, 50],
  });

  return (
    <Marker position={position.location} icon={customIcon}>
      {children}
    </Marker>
  );
};

export default CustomMarker;