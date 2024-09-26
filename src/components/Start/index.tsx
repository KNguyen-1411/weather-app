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
import WeatherMapMiniWidget from '@/components/widgets/WeatherMapMiniWidget';
import TopCityWidget from '@/components/widgets/TopCityWidget';
const Map = dynamic(() => import('@/components/widgets/Map'), { ssr: false });
import React from 'react';
import { ToggleTheme } from '@/components/UI/ToogleTheme';
import styles from './Layout.module.css';
import { setData } from '@/lib/convertData';
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
    const dataWeatherConvert = setData(dataWeather);
    // Neu tim kiem khong thanh cong!
    React.useEffect(() => {
        if (!SearchOK) {
            alert('Tìm kiếm không thành công!');
        }
    }, [SearchOK]);

    return (
        <div className="App-main container mx-auto my-6">
            <header className="mt-2 mb-6 flex justify-end mx-2">
                <SearchCity />
                <ToggleTheme />
            </header>
            <main>
                <div className={styles.mainLayout}>
                    <div className={styles.col1}>
                        <Card>
                            <WeatherWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className={styles.col2}>
                        <Card>
                            <AirPollutionWidget data={dataAirPollution} />
                        </Card>
                    </div>
                    <div className={styles.col3}>
                        <Card>
                            <SunsetWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className={styles.col4}>
                        <Card>
                            <WindWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className={styles.col5}>
                        <Card className="py-0">
                            {dataWeatherConvert && (
                                <WeatherMapMiniWidget
                                    data={dataWeatherConvert}
                                />
                            )}
                        </Card>
                    </div>
                    <div className={styles.col6}>
                        <Card>
                            <UvIndexWidget data={dataUvIndex} />
                        </Card>
                    </div>
                    <div className={styles.col7}>
                        <Card>
                            <LocationWidget data={dataGeocode} />
                        </Card>
                    </div>
                    <div className={styles.col8}>
                        <Card>
                            {dataWeatherConvert && (
                                <WeatherMapWidget data={dataWeather} />
                            )}
                        </Card>
                    </div>
                    <div className={styles.col9}>
                        <Card>
                            <FeelsLikeWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className={styles.col10}>
                        <Card>
                            <HumidityWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className={styles.col11}>
                        <Card>
                            <VisibilityWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className={styles.col12}>
                        <Card>
                            <PressureWidget data={dataBaseWeather} />
                        </Card>
                    </div>
                    <div className={styles.col13}>
                        <Card>
                            <TopCityWidget />
                        </Card>
                    </div>
                    <div
                        className={`${styles.col14} rounded-lg border border-slate-500`}
                    >
                        <Map data={dataGeocode} />
                    </div>
                </div>
            </main>
            <footer className="mt-6 text-center text-xs text-gray-500">
                © 2024 - Weather App by Khánh Nguyên
            </footer>
        </div>
    );
}
