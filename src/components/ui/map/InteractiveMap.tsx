'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Tipos para las props del mapa
interface MapProps {
  coordinates: [number, number];
  zoom?: number;
  height?: string;
  iconUrl?: string;
  iconSize?: [number, number];
  iconAnchor?: [number, number];
  googleMapsUrl?: string;
  className?: string;
}

// Componente de mapa dinámico para evitar problemas de SSR
const createLeafletMap = ({ 
  coordinates, 
  zoom = 14, 
  height = 'h-120', 
  iconUrl = '/images/maleficiumLogo.png',
  iconSize = [90, 120],
  iconAnchor = [45, 40],
  googleMapsUrl,
  className = ''
}: MapProps) => dynamic(
  () => Promise.all([
    import('react-leaflet'),
    import('leaflet')
  ]).then(([reactLeaflet, L]) => {
    const { MapContainer, TileLayer, Marker, AttributionControl } = reactLeaflet;
    
    return function MapComponent() {
      useEffect(() => {
        // Fix para iconos de Leaflet en Next.js se hace automáticamente
      }, []);

      // Función para abrir Google Maps
      const openGoogleMaps = () => {
        if (googleMapsUrl) {
          window.open(googleMapsUrl, '_blank');
        } else {
          // Fallback a coordenadas si no hay URL específica
          window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates[0]},${coordinates[1]}`, '_blank');
        }
      };

      // Crear icono personalizado
      const customIcon = L.icon({
        iconUrl,
        iconSize,
        iconAnchor,
        popupAnchor: [0, -iconSize[1]],
      });

      return (
        <div className={`w-full ${height} ${className}`}>
          <MapContainer
            center={coordinates}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
            attributionControl={false}
          >
            <TileLayer
              attribution='© OpenStreetMap © CARTO'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <AttributionControl 
              position="bottomright" 
              prefix={false}
            />
            <Marker 
              position={coordinates} 
              icon={customIcon}
              eventHandlers={{
                click: openGoogleMaps,
              }}
            />
          </MapContainer>
        </div>
      );
    };
  }),
  {
    ssr: false,
    loading: () => (
      <div className={`w-full ${height} bg-gray-800 flex items-center justify-center ${className}`}>
        <div className="text-white">Loading map...</div>
      </div>
    ),
  }
);

export default function InteractiveMap(props: MapProps) {
  const LeafletMap = createLeafletMap(props);
  return <LeafletMap />;
}
