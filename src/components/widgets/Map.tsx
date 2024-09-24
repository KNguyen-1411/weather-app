'use client';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IGeocodeData } from '@/types/global';
const ZoomMap: number = 13;
interface FlyToProps {
    activeCityCoords: { lat: number; lon: number };
}
const FlyTo = ({ activeCityCoords }: FlyToProps) => {
    const map = useMap();

    useEffect(() => {
        if (activeCityCoords) {
            const zoomLevel = ZoomMap;
            const flyToOptions = {
                duration: 3.5,
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

interface MapProps {
    data: IGeocodeData;
}
const Map = ({ data }: MapProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || !data || !data.data) {
        return null;
    }
    const location = data.data;
    const position: [number, number] = [location.lat, location.lon];
    return (
        <div
            className="border"
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            <MapContainer
                center={position}
                zoom={ZoomMap}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FlyTo
                    activeCityCoords={{
                        lat: location.lat,
                        lon: location.lon,
                    }}
                />
            </MapContainer>
        </div>
    );
};

export default Map;
