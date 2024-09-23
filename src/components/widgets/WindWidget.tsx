import { IWeatherBaseData } from '@/types/global';

interface WindWidgetProps {
    data: IWeatherBaseData;
}
export default function WindWidget({ data }: WindWidgetProps) {
    return <div>{data.wind.speed}</div>;
}
