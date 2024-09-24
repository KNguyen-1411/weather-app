import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';

interface HumidityWidgetProps {
    data: IWeatherBaseData;
}
export default function HumidityWidget({ data }: HumidityWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>Độ ẩm</CardTitle>
            </CardHeader>
            <CardContent>{data.main.humidity}%</CardContent>
            <CardFooter>
                <p>Độ ẩm không khí</p>
            </CardFooter>
        </>
    );
}
