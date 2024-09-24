import { IAirPollutionData } from '@/types/global';
import { Progress } from '@/components/UI/progress';
interface AirPollutionWidgetProps {
    data: IAirPollutionData;
}
export default function AirPollutionWidget({ data }: AirPollutionWidgetProps) {
    return (
        <div>
            <div className="mb-3">
                <h2>Ô nhiễm không khí:</h2>
            </div>
            <div className="w-11/12 mx-auto">
                <Progress value={data.list[0].main.aqi * 5} />
            </div>
        </div>
    );
}
