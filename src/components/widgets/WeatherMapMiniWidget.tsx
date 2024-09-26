import { IWeatherData } from '@/types/global';
import NewIcon from '../UI/NewIcon';
import { CardContent } from '../UI/card';

interface WeatherMapMiniWidgetProps {
    data: IWeatherData;
}
interface IWeatherItem {
    id: number;
    temp: number;
    time: string;
}
const WeatherItem = ({ id, temp, time }: IWeatherItem) => {
    return (
        <div className="flex flex-col items-center justify-between h-full mx-4 ">
            <div>{time}</div>
            <NewIcon weatherCode={id} className="w-12 h-12" />
            <div className="font-bold">
                {temp.toFixed(0)}
                <span className="text-xs">°C</span>
            </div>
        </div>
    );
};
export default function WeatherMapMiniWidget({
    data,
}: WeatherMapMiniWidgetProps) {
    return (
        <CardContent className="flex overflow-y-hidden py-4 scroll-fix flex-1 overflow-x-scroll">
            {data.list.slice(1, 10).map((item, index) => (
                <WeatherItem
                    key={index}
                    id={item.weather[0].id}
                    temp={item.main.temp}
                    time={item.dt_txt.split('|')[1]}
                />
            ))}
        </CardContent>
    );
}
