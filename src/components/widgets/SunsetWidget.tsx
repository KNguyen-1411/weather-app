import { IWeatherBaseData } from '@/types/global';

interface SunsetWidgetProps {
    data: IWeatherBaseData;
}
export default function SunsetWidget({ data }: SunsetWidgetProps) {
    return <div>{data.sys.sunset}</div>;
}
