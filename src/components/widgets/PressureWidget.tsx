import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Pressure_Cmt } from '@/lib/MapCmt';
import { Gauge } from 'lucide-react';
interface PressureWidgetProps {
    data: IWeatherBaseData;
}
export default function PressureWidget({ data }: PressureWidgetProps) {
    // return <div>{data.main.pressure} hPa</div>;
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <Gauge className="mr-1" />
                    Áp suất
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>{data.main.pressure} hPa</div>
            </CardContent>
            <CardFooter>
                <p>Áp suất không khí {Pressure_Cmt(data.main.pressure)}</p>
            </CardFooter>
        </>
    );
}
