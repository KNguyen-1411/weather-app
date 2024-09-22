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

// Main Map component
export default function Map({ position }: { position: [number, number] }) {
    const [isClient, setIsClient] = useState(false);
    const [activeCityCoords, setActiveCityCoords] = useState<{
        lat: number;
        lon: number;
    } | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    const changePosition = () => {
        setActiveCityCoords({ lat: 21.0294498, lon: 105.8544441 });
    };

    return (
        <div className="border">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '50vh', width: '50vw' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <FlyTo
                    activeCityCoords={
                        activeCityCoords || {
                            lat: position[0],
                            lon: position[1],
                        }
                    }
                />
            </MapContainer>
            <button onClick={changePosition}>Change Position</button>
        </div>
    );
}
