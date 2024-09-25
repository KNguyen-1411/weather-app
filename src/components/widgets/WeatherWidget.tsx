import { IWeatherBaseData } from '@/types/global';
import { useDate } from '@/hooks/useData';
import Image from 'next/image';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Navigation } from 'lucide-react';
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
            <CardContent>{data.main.temp.toFixed(0)}°</CardContent>
            <CardFooter>
                <div>{capitalizeFirstLetter(data.weather[0].description)}</div>
                <div>
                    <Image
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                        width={50}
                        height={50}
                        alt="icon"
                    />
                </div>
            </CardFooter>
        </>
    );
}
