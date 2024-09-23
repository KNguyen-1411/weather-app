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
let CityRes = 'Hue';
export default async function HomeIndex({ searchParams }: HomeProps) {
    let dataBaseWeather = await getWeatherBaseData({
        city: searchParams.city || CityRes,
    });
    let dataWeather = await getWeatherData({
        city: searchParams.city || CityRes,
    });
    let dataGeocode = await getGeocodeData({
        city: 'hue',
    });
    let dataUvIndex = await getUvIndexData({
        city: 'hue',
    });
    let dataAirPollution = await getAirPollutionData({
        city: 'hue',
    });

    if (
        dataWeather.ok &&
        dataBaseWeather.ok &&
        dataGeocode.ok &&
        dataUvIndex.ok &&
        dataAirPollution.ok
    ) {
        CityRes = dataBaseWeather.name;
    } else {
        dataBaseWeather = await getWeatherBaseData({
            city: CityRes,
        });
        dataWeather = await getWeatherData({
            city: CityRes,
        });
        dataGeocode = await getGeocodeData({
            city: CityRes,
        });
        dataUvIndex = await getUvIndexData({
            city: CityRes,
        });
        dataAirPollution = await getAirPollutionData({
            city: CityRes,
        });
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
