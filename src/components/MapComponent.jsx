// components/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// ✅ Custom marker icon fix (for production too)
const icon = L.icon({ 
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapComponent() {
  // ✅ Dhaka, Bangladesh position
  const position = [23.8103, 90.4125];

  return (
    <MapContainer 
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-sm font-medium">
            <p>📍 Dhaka, Bangladesh</p>
            <p className="text-gray-600">My Current Location</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
