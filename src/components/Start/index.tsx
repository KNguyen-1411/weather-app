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
import WeatherWidget from '@/components/widgets/WeatherWidget';
import AirPollutionWidget from '@/components/widgets/AirPollutionWidget';
import WeatherMapWidget from '@/components/widgets/WeatherMapWidget';
import { useConvertDataWeather } from '@/hooks/useConvertDataWeather';
import WeatherMapMiniWidget from '@/components/widgets/WeatherMapMiniWidget';
import TopCityWidget from '@/components/widgets/TopCityWidget';
const Map = dynamic(() => import('@/components/widgets/Map'), { ssr: false });
import React from 'react';
import { ToggleTheme } from '@/components/UI/ToogleTheme';
import { ChartWidget } from '../widgets/ChartWidget';
interface StartProps {
    SearchOK?: boolean;
    dataWeather: IWeatherData;
    dataBaseWeather: IWeatherBaseData;
    dataGeocode: IGeocodeData;
    dataUvIndex: IUvIndexData;
    dataAirPollution: IAirPollutionData;
}
export default function Start({
    SearchOK,
    dataWeather,
    dataBaseWeather,
    dataGeocode,
    dataUvIndex,
    dataAirPollution,
}: StartProps) {
    const { dataWeatherConvert, loading } = useConvertDataWeather({
        data: dataWeather,
    });

    // Neu tim kiem khong thanh cong!
    React.useEffect(() => {
        if (!SearchOK) {
            alert('Tìm kiếm không thành công!');
        }
    }, [SearchOK]);

    return (
        <div className="App-main container mx-auto my-2">
            <header className="mt-2 mb-4 flex justify-end">
                <ToggleTheme />
                <SearchCity />
            </header>
            <main>
                <div className="grid grid-cols-11 grid-rows-10 gap-4">
                    <div className="col-span-3 row-span-4">
                        <Card>
                            <WeatherWidget data={dataBaseWeather} />
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
                        <Card>
                            {loading && dataWeatherConvert && (
                                <WeatherMapMiniWidget
                                    data={dataWeatherConvert}
                                />
                            )}
                        </Card>
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
                        <Card>
                            {loading && dataWeatherConvert && (
                                <WeatherMapWidget data={dataWeather} />
                            )}
                        </Card>
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
                        <Card>
                            <TopCityWidget />
                        </Card>
                    </div>
                    <div className="col-span-6 row-span-5 col-start-4 row-start-7">
                        <Card className="">
                            <Map data={dataGeocode} />
                        </Card>
                    </div>
                </div>
            </main>
            {/* <ChartWidget /> */}
        </div>
    );
}
