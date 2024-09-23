import { IWeatherBaseData } from '@/types/global';

interface FeelsLikeWidgetProps {
    data: IWeatherBaseData;
}
export default function FeelsLikeWidget({ data }: FeelsLikeWidgetProps) {
    return <div>{data.main.feels_like}</div>;
}
