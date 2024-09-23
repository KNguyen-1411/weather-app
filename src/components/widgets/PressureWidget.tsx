import { IWeatherBaseData } from '@/types/global';

interface PressureWidgetProps {
    data: IWeatherBaseData;
}
export default function PressureWidget({ data }: PressureWidgetProps) {
    return <div>{data.main.pressure} hPa</div>;
}
