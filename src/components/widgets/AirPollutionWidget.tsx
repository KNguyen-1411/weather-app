import { IAirPollutionData } from '@/types/global';
import { Progress } from '@/components/UI/progress';
import { CardContent, CardHeader, CardTitle } from '../UI/card';
interface AirPollutionWidgetProps {
    data: IAirPollutionData;
}
export default function AirPollutionWidget({ data }: AirPollutionWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>Ô nhiễm không khí</CardTitle>
            </CardHeader>
            <CardContent>
                <Progress value={data.list[0].main.aqi * 5} />
            </CardContent>
        </>
    );
}
