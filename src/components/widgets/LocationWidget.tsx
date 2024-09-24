import { IGeocodeData } from '@/types/global';
import { ProgressClone } from '../UI/progressCLone';
import { CardContent, CardHeader, CardTitle } from '../UI/card';

interface LocationWidgetProps {
    data: IGeocodeData;
}

export default function LocationWidget({ data }: LocationWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>Vị trí</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    Latitude: {data.data.lat}, Longitude: {data.data.lon}
                </div>
            </CardContent>
        </>
    );
}
