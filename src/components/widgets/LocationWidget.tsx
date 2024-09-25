import { IGeocodeData } from '@/types/global';
import { ProgressClone } from '../UI/progressCLone';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { LocateFixed } from 'lucide-react';

interface LocationWidgetProps {
    data: IGeocodeData;
}

export default function LocationWidget({ data }: LocationWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <LocateFixed className="mr-1" />
                    Vị trí
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <LocateFixed className="mx-auto w-16 h-16 animate-spin" />
            </CardContent>
            <CardFooter className="flex justify-between">
                <p className="text-center">Vĩ độ {data.data.lat.toFixed(3)}</p>
                <p className="text-center">
                    Kinh độ {data.data.lon.toFixed(3)}
                </p>
            </CardFooter>
        </>
    );
}
