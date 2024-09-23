import { IWeatherBaseData } from '@/types/global';

interface HumidityWidgetProps {
    data: IWeatherBaseData;
}
export default function HumidityWidget({ data }: HumidityWidgetProps) {
    return <div>{data.main.humidity} %</div>;
}
