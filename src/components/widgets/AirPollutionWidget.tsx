import { IAirPollutionData } from '@/types/global';
import { Progress } from '@/components/UI/progress';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Air_Cmt } from '@/lib/MapCmt';
import { ThermometerSun } from 'lucide-react';
interface AirPollutionWidgetProps {
    data: IAirPollutionData;
}
export default function AirPollutionWidget({ data }: AirPollutionWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <ThermometerSun className="mr-1" />Ô nhiễm không khí
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Progress value={data.list[0].main.aqi * 5} />
            </CardContent>
            <CardFooter>
                <p>Chất lượng không khí {Air_Cmt(data.list[0].main.aqi)}</p>
            </CardFooter>
        </>
    );
}
