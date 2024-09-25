import { IWeatherData } from '@/types/global';
import { CardContent, CardHeader, CardTitle } from '../UI/card';
import { CalendarDays } from 'lucide-react';

interface WeatherMapWidgetProps {
    data: IWeatherData;
}
export default function WeatherMapWidget({ data }: WeatherMapWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <CalendarDays className="mr-1" />
                    Bản đồ thời tiết
                </CardTitle>
            </CardHeader>
            <CardContent>Map data weather</CardContent>
        </>
    );
}
