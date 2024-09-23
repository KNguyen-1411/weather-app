import { IWeatherBaseData } from '@/types/global';

interface VisibilityWidgetProps {
    data: IWeatherBaseData;
}
export default function VisibilityWidget({ data }: VisibilityWidgetProps) {
    return <div>{data.visibility / 1000} Km/h</div>;
}
