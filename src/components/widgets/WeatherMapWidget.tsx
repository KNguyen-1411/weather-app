import { IWeatherData } from '@/types/global';

interface WeatherMapWidgetProps {
    data: IWeatherData;
}
export default function WeatherMapWidget({ data }: WeatherMapWidgetProps) {
    return <div>WeatherMapWidget</div>;
}
