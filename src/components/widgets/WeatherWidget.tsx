import { IWeatherBaseData } from '@/types/global';
import { useDate } from '@/hooks/useData';
import Image from 'next/image';
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
        <div>
            <div className="flex justify-between">
                <p>{day}</p>
                <p>{time}</p>
            </div>
            <div>{data.name}</div>
            <div className="flex justify-center">
                <p className="font-bold text-4xl">
                    {data.main.temp.toFixed(0)}°
                </p>
            </div>
            <div>{capitalizeFirstLetter(data.weather[0].description)}</div>
            <div>
                <Image
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                    width={50}
                    height={50}
                    alt="icon"
                />
            </div>
            <div className="flex">
                <p>Low: {data.main.temp_min}</p>
                <p className="ms-3">Hight: {data.main.temp_max}</p>
            </div>
        </div>
    );
}
