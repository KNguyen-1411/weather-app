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
            <div className="border-b-2 py-2">
                <div className="font-bold mb-3">{dt_txt}</div>
                <div className="flex justify-between items-center">
                    <div className="pb-4">
                        <p className="text-sm">Low</p>{' '}
                        <p className="font-bold">{temp_max.toFixed(0)}°C</p>
                    </div>
                    <ProgressClone value={temp_max} className="mx-2" />
                    <div className="pb-4">
                        <p className="text-sm">High</p>
                        <p className="font-bold">{temp_min.toFixed(0)}°C</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default function WeatherMapWidget({ data }: WeatherMapWidgetProps) {
    data.list = data.list.filter((item) => {
        const hour = item.dt_txt.split('|')[1];
        const hourNumber = parseInt(hour, 10);
        return hourNumber >= 9 && hourNumber < 12;
    });
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <CalendarDays className="mr-1 textOverFlow" />
                    Thời tiết trong 5 ngày tới
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
                {data.list.map((item, index) => (
                    <WeatherItem
                        key={index}
                        temp_max={item.main.temp_max}
                        temp_min={item.main.temp_min}
                        dt_txt={item.dt_txt.split('|')[0]}
                    />
                ))}
            </CardContent>
        </>
    );
}
