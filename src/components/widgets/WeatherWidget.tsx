import { IWeatherBaseData } from '@/types/global';
import { useDate } from '@/hooks/useData';
import Image from 'next/image';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Navigation } from 'lucide-react';
import NewIcon from '../UI/NewIcon';
interface WeatherMiniWidgetProps {
    data: IWeatherBaseData;
}
export default function WeatherWidget({ data }: WeatherMiniWidgetProps) {
    const { day, time } = useDate();
    function capitalizeFirstLetter(sentence: string) {
        if (!sentence) return '';
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return (
        <>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <p>{day}</p>
                    <p>{time}</p>
                </CardTitle>
                <div className="flex items-center">
                    {data.name}
                    <Navigation className="ms-2 w-3" />
                </div>
            </CardHeader>
            <CardContent className="flex float-col justify-center">
                <div>
                    <NewIcon
                        weatherCode={data.weather[0].id}
                        className="w-32 h-32"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col">
                <div>{data.main.temp.toFixed(0)}°</div>
                <div>{capitalizeFirstLetter(data.weather[0].description)}</div>
            </CardFooter>
        </>
    );
}
