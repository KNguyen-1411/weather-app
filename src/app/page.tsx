import { getWeatherBaseData } from '@/action/weatherdata.action';
import SearchCity from '@/components/SearchCity';
import { ICitySearch } from '@/types/global';

interface HomeProps {
    searchParams: ICitySearch;
}

export default async function Home({ searchParams }: HomeProps) {
    const data = await getWeatherBaseData({
        city: searchParams.city || 'Huế',
    });
    console.log(searchParams.city);
    console.log(data);
    return (
        <div>
            <h2>Weather Data for {data?.name}</h2>
            <SearchCity />
        </div>
    );
}
