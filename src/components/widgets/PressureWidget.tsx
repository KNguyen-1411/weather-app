import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
interface PressureWidgetProps {
    data: IWeatherBaseData;
}
export default function PressureWidget({ data }: PressureWidgetProps) {
    // return <div>{data.main.pressure} hPa</div>;
    return (
        <>
            <CardHeader>
                <CardTitle>Áp suất</CardTitle>
            </CardHeader>
            <CardContent>
                <div>{data.main.pressure} hPa</div>
            </CardContent>
            <CardFooter>
                <p>Áp suất không khí trung bình</p>
            </CardFooter>
        </>
    );
}
