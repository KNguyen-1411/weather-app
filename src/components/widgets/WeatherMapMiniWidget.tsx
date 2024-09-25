import { IWeatherData } from '@/types/global';
import NewIcon from '../UI/NewIcon';

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
        <div className="flex flex-col items-center h-full mr-3">
            <div>{time}</div>
            <NewIcon weatherCode={id} className="w-10 h-10" />
            <div>{temp}</div>
        </div>
    );
};
export default function WeatherMapMiniWidget({
    data,
}: WeatherMapMiniWidgetProps) {
    return (
        <div className="flex overflow-y-scroll py-2">
            {data.list.map((item) => (
                <WeatherItem
                    key={item.dt}
                    id={item.weather[0].id}
                    temp={item.main.temp}
                    time={item.dt_txt.slice(0, 5)}
                />
            ))}
        </div>
    );
}
