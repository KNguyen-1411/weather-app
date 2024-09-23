import {
    getWeatherBaseData,
    getWeatherData,
    getGeocodeData,
    getUvIndexData,
    getAirPollutionData,
} from '@/action/weatherdata.action';
import Start from '@/components/Start';
import { ICitySearch } from '@/types/global';

interface HomeProps {
    searchParams: ICitySearch;
}

const DEFAULT_CITY = 'Hue';

export default async function HomeIndex({ searchParams }: HomeProps) {
    const city = searchParams.city || DEFAULT_CITY;
    const fetchData = async (city: string) => {
        const [
            dataBaseWeather,
            dataWeather,
            dataGeocode,
            dataUvIndex,
            dataAirPollution,
        ] = await Promise.all([
            getWeatherBaseData({ city }),
            getWeatherData({ city }),
            getGeocodeData({ city }),
            getUvIndexData({ city }),
            getAirPollutionData({ city }),
        ]);
        return {
            dataBaseWeather,
            dataWeather,
            dataGeocode,
            dataUvIndex,
            dataAirPollution,
        };
    };
    let {
        dataBaseWeather,
        dataWeather,
        dataGeocode,
        dataUvIndex,
        dataAirPollution,
    } = await fetchData(city);
    if (
        !dataWeather.ok ||
        !dataBaseWeather.ok ||
        !dataGeocode.ok ||
        !dataUvIndex.ok ||
        !dataAirPollution.ok
    ) {
        ({
            dataBaseWeather,
            dataWeather,
            dataGeocode,
            dataUvIndex,
            dataAirPollution,
        } = await fetchData(DEFAULT_CITY));
    }

    return (
        <Start
            dataWeather={dataWeather}
            dataBaseWeather={dataBaseWeather}
            dataGeocode={dataGeocode}
            dataUvIndex={dataUvIndex}
            dataAirPollution={dataAirPollution}
        />
    );
}
