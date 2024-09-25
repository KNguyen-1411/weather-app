import {
    IWeatherBaseData,
    IWeatherData,
    IWeatherItemList,
} from '@/types/global';
import { CardContent, CardHeader, CardTitle } from '../UI/card';
import { CalendarDays } from 'lucide-react';
import { ProgressClone } from '../UI/progressCLone';

interface WeatherMapWidgetProps {
    data: IWeatherData;
}
interface WeatherItemProps {
    temp_max: number;
    temp_min: number;
    dt_txt: string;
}
const WeatherItem = ({ temp_max, temp_min, dt_txt }: WeatherItemProps) => {
    return (
        <>
            <div>{dt_txt}</div>
            <div className="flex justify-between items-center">
                <div>Min {temp_max}</div>
                <ProgressClone value={temp_max} className="mx-2" />
                <div>Max {temp_min}</div>
            </div>
        </>
    );
};
export default function WeatherMapWidget({ data }: WeatherMapWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <CalendarDays className="mr-1" />
                    Bản đồ thời tiết
                </CardTitle>
            </CardHeader>
            <CardContent>
                {data.list.slice(0, 5).map((item, index) => (
                    <WeatherItem
                        key={index}
                        temp_max={item.main.temp_max}
                        temp_min={item.main.temp_min}
                        dt_txt={item.dt_txt}
                    />
                ))}
            </CardContent>
        </>
    );
}
