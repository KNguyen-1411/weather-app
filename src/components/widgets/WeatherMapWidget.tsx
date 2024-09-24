import { IWeatherData } from '@/types/global';
import { CardContent, CardHeader, CardTitle } from '../UI/card';

interface WeatherMapWidgetProps {
    data: IWeatherData;
}
export default function WeatherMapWidget({ data }: WeatherMapWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>Bản đồ thời tiết</CardTitle>
            </CardHeader>
            <CardContent>Map data weather</CardContent>
        </>
    );
}
