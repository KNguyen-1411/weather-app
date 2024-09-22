'use client';
import { IWeatherBaseData } from '@/types/global';
import SearchCity from './Pages/SearchCity';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const Map = dynamic(() => import('./Map'), { ssr: false });
interface HomeProps {
    data: IWeatherBaseData;
    ok: boolean;
    status: number;
}

export default function IndexHome(props: HomeProps) {
    const [position, setPosition] = useState<[number, number]>([
        16.4639321, 107.5863388,
    ]);

    // Example function to change position
    const changePosition = () => {
        setPosition([21.0294498, 105.8544441]); // New coordinates
    };
    return (
        <div>
            <div>Home {props.data.name}</div>
            <SearchCity />
            <button onClick={changePosition}>Change Position</button>
            <Map position={position} />
        </div>
    );
}
