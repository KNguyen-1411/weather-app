import { IGeocodeData } from '@/types/global';
import { ProgressClone } from '../UI/progressCLone';
import { CardContent, CardHeader, CardTitle } from '../UI/card';
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
            <CardContent>
                <div>
                    <p>Vĩ độ: {data.data.lat}</p>
                    <p>Kinh độ: {data.data.lon}</p>
                </div>
            </CardContent>
        </>
    );
}
