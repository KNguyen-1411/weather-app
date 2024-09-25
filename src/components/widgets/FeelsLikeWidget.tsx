import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { FeelsLike_Cmt } from '@/lib/MapCmt';
import { Thermometer } from 'lucide-react';

interface FeelsLikeWidgetProps {
    data: IWeatherBaseData;
}
export default function FeelsLikeWidget({ data }: FeelsLikeWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <Thermometer className="mr-1" />
                    Nhiệt độ cảm nhận
                </CardTitle>
            </CardHeader>
            <CardContent>{data.main.feels_like.toFixed(0)}°</CardContent>
            <CardFooter>
                <p>{FeelsLike_Cmt(data.main.feels_like)}</p>
            </CardFooter>
        </>
    );
}
