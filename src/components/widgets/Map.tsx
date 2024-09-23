import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FlyTo = ({
    activeCityCoords,
}: {
    activeCityCoords: { lat: number; lon: number };
}) => {
    const map = useMap();

    useEffect(() => {
        if (activeCityCoords) {
            const zoomLevel = 13;
            const flyToOptions = {
                duration: 1.5,
            };
            map.flyTo(
                [activeCityCoords.lat, activeCityCoords.lon],
                zoomLevel,
                flyToOptions,
            );
        }
    }, [activeCityCoords, map]);

    return null;
};

export default function Map({ position }: { position: [number, number] }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div
            className="border"
            style={{
                height: '300px',
                width: '100%',
            }}
        >
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <FlyTo
                    activeCityCoords={{
                        lat: position[0],
                        lon: position[1],
                    }}
                />
            </MapContainer>
        </div>
    );
}
