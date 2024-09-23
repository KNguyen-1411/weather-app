import { IWeatherData } from '@/types/global';

interface WeatherMapMiniWidgetProps {
    data: IWeatherData;
}

export default function WeatherMapMiniWidget({
    data,
}: WeatherMapMiniWidgetProps) {
    return <div>WeatherMapMiniWidget</div>;
}
