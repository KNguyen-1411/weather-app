'use client';
import {
    IWeatherData,
    IAirPollutionData,
    IWeatherBaseData,
    IUvIndexData,
    IGeocodeData,
} from '@/types/global';
import dynamic from 'next/dynamic';
import SearchCity from '@/components/UI/SearchCity';
import { Card } from '@/components/UI/card';
import WindWidget from '@/components/widgets/WindWidget';
import SunsetWidget from '@/components/widgets/SunsetWidget';
import UvIndexWidget from '@/components/widgets/UvIndexWidget';
import LocationWidget from '@/components/widgets/LocationWidget';
import HumidityWidget from '@/components/widgets/HumidityWidget';
import PressureWidget from '@/components/widgets/PressureWidget';
import FeelsLikeWidget from '@/components/widgets/FeelsLikeWidget';
import VisibilityWidget from '@/components/widgets/VisibilityWidget';
import WeatherMiniWidget from '@/components/widgets/WeatherMiniWidget';
import AirPollutionWidget from '@/components/widgets/AirPollutionWidget';
import { useConvertDataWeather } from '@/hooks/useConvertDataWeather';
const Map = dynamic(() => import('@/components/widgets/Map'), { ssr: false });
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
    return (
        <div className="App-main container mx-auto">
            <header className="mt-2 mb-4 flex justify-end">
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
                        <Card>top location</Card>
                    </div>
                    <div className="col-span-6 row-span-5 col-start-4 row-start-7">
                        <Card>
                            <Map data={dataGeocode} />
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
