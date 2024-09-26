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
            <CardContent className="flex flex-col items-center flex-1">
                <div className="mb-2">
                    <NewIcon
                        weatherCode={data.weather[0].id}
                        className="w-40 h-40 "
                    />
                </div>
                <div className="font-bold text-5xl">
                    {data.main.temp.toFixed(0)}°
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
                <div>{capitalizeFirstLetter(data.weather[0].description)}</div>
                <div className="flex">
                    <p>Low: {data.main.temp_min.toFixed(0)}°</p>
                    <p className="ms-3">
                        High: {data.main.temp_max.toFixed(0)}°
                    </p>
                </div>
            </CardFooter>
        </>
    );
}
