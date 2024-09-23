import { IWeatherBaseData } from '@/types/global';

interface WeatherMiniWidgetProps {
    data: IWeatherBaseData;
}
export default function WeatherWidget({ data }: WeatherMiniWidgetProps) {
    return <div>{data.main.temp.toFixed(0)}</div>;
}
