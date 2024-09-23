'use client';
import {
    IWeatherData,
    IAirPollutionData,
    IWeatherBaseData,
    IUvIndexData,
    IGeocodeData,
} from '@/types/global';
import dynamic from 'next/dynamic';
import WeatherMiniWidget from '../widgets/WeatherMiniWidget';
import SearchCity from '../UI/SearchCity';
import { Card } from '../UI/card';
import SunsetWidget from '../widgets/SunsetWidget';
import WindWidget from '../widgets/WindWidget';
import UvIndexWidget from '../widgets/UvIndexWidget';
import LocationWidget from '../widgets/LocationWidget';
import FeelsLikeWidget from '../widgets/FeelsLikeWidget';
import HumidityWidget from '../widgets/HumidityWidget';
import PressureWidget from '../widgets/PressureWidget';
import AirPollutionWidget from '../widgets/AirPollutionWidget';
import VisibilityWidget from '../widgets/VisibilityWidget';
import { useConvertDataWeather } from '@/hooks/useConvertDataWeather';
const Map = dynamic(() => import('../widgets/Map'), { ssr: false });

interface StartProps {
    dataWeather: IWeatherData;
    dataBaseWeather: IWeatherBaseData;
    dataGeocode: IGeocodeData;
    dataUvIndex: IUvIndexData;
    dataAirPollution: IAirPollutionData;
}
export default function Start({
    dataWeather,
    dataBaseWeather,
    dataGeocode,
    dataUvIndex,
    dataAirPollution,
}: StartProps) {
    const { data, loading } = useConvertDataWeather({ data: dataWeather });
    if (!loading) {
        console.log(data);
    }
    return (
        <div className="App-main container mx-auto">
            <header className="mt-2 mb-4">
                <SearchCity />
            </header>
            <main>
                <div className="grid grid-cols-11 grid-rows-11 gap-4">
                    <div className="col-span-3 row-span-4">
                        <Card>
                            <WeatherMiniWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className="col-span-4 row-span-2 col-start-4">
                        <Card>
                            <AirPollutionWidget data={dataAirPollution} />
                        </Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-8">
                        <Card>
                            <SunsetWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-10">
                        <Card>
                            <WindWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className="col-span-4 row-span-2 col-start-4 row-start-3">
                        <Card>map weather mini</Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-8 row-start-3">
                        <Card>
                            <UvIndexWidget data={dataUvIndex} />
                        </Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-10 row-start-3">
                        <Card>
                            <LocationWidget data={dataGeocode} />
                        </Card>
                    </div>
                    <div className="col-span-3 row-span-7 row-start-5">
                        <Card>dataWeather</Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-4 row-start-5">
                        <Card>
                            <FeelsLikeWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-6 row-start-5">
                        <Card>
                            <HumidityWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-8 row-start-5">
                        <Card>
                            <VisibilityWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-10 row-start-5">
                        <Card>
                            <PressureWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className="col-span-2 row-span-5 col-start-10 row-start-7">
                        <Card>pollution location</Card>
                    </div>
                    <div className="col-span-6 row-span-5 col-start-4 row-start-7">
                        <Card>
                            <Map position={[107.6, 16.4667]} />
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
