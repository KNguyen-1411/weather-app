import { IWeatherBaseData } from '@/types/global';

interface WeatherMiniWidgetProps {
    data: IWeatherBaseData;
}
export default function WeatherMiniWidget({ data }: WeatherMiniWidgetProps) {
    return <div>{data.main.temp}</div>;
}
