import { IAirPollutionData } from '@/types/global';

interface AirPollutionWidgetProps {
    data: IAirPollutionData;
}
export default function AirPollutionWidget({ data }: AirPollutionWidgetProps) {
    return <div>{data.list[0].main.aqi}</div>;
}
