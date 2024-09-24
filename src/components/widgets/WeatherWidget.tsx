import { IWeatherBaseData } from '@/types/global';
import { useDate } from '@/hooks/useData';
import Image from 'next/image';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
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
                <CardTitle>
                    <div className="flex justify-between">
                        <p>{day}</p>
                        <p>{time}</p>
                    </div>
                    <div>{data.name}</div>
                </CardTitle>
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
