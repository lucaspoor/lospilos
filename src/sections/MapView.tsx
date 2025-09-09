"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon not showing in some bundlers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const lan = -39.187038135362215;
const lon = -71.77515149116516;

const position: LatLngExpression = [lan, lon]; // Santiago, Chile
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const navUrl = isIOS
  ? `http://maps.apple.com/?daddr=${lan},${lon}`
  : `https://www.google.com/maps/dir/?api=1&destination=${lan},${lon}`;

export default function MapView() {
  return (
    <div className="h-[500px] w-full">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <a href={navUrl}>Ir a Los Pilos</a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
