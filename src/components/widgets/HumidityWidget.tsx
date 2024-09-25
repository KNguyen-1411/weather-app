import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Humidity_Cmt } from '@/lib/MapCmt';
import { Droplet } from 'lucide-react';

interface HumidityWidgetProps {
    data: IWeatherBaseData;
}
export default function HumidityWidget({ data }: HumidityWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <Droplet className="mr-1" />
                    Độ ẩm
                </CardTitle>
            </CardHeader>
            <CardContent>{data.main.humidity}%</CardContent>
            <CardFooter>
                <p>{Humidity_Cmt(data.main.humidity)}</p>
            </CardFooter>
        </>
    );
}
