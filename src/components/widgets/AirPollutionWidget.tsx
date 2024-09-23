import { IAirPollutionData } from '@/types/global';
import { Progress } from '@/components/UI/progress';

interface AirPollutionWidgetProps {
    data: IAirPollutionData;
}
export default function AirPollutionWidget({ data }: AirPollutionWidgetProps) {
    return (
        <div>
            <Progress value={data.list[0].main.aqi * 5} />
        </div>
    );
}
