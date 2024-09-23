import {
    getWeatherBaseData,
    getGeocodeData,
} from '@/action/weatherdata.action';
import { ICitySearch } from '@/types/global';
import Home from '@/components/Pages/Home';
import IndexHome from '@/components/IndexHome';

interface HomeProps {
    searchParams: ICitySearch;
}
let CityRes = 'Hue';
export default async function HomeIndex({ searchParams }: HomeProps) {
    let data = await getWeatherBaseData({
        city: searchParams.city || CityRes,
    });
    const geocode = await getGeocodeData({
        city: 'hue',
    });
    if (data.ok) {
        CityRes = data.name;
    } else {
        data = await getWeatherBaseData({
            city: CityRes,
        });
    }
    console.log(geocode[0].lat, geocode[0].lon);
    console.log(data.name);
    return <IndexHome data={data} ok={data.ok} status={data.status} />;
}
