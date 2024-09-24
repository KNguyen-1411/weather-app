import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';

interface FeelsLikeWidgetProps {
    data: IWeatherBaseData;
}
export default function FeelsLikeWidget({ data }: FeelsLikeWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>Nhiệt độ cảm nhận</CardTitle>
            </CardHeader>
            <CardContent>{data.main.feels_like.toFixed(0)}°</CardContent>
            <CardFooter>
                <p>Cảm thấy mát mẻ</p>
            </CardFooter>
        </>
    );
}
