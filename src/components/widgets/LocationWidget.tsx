import { IGeocodeData } from '@/types/global';
import { ProgressClone } from '../UI/progressCLone';

interface LocationWidgetProps {
    data: IGeocodeData;
}

export default function LocationWidget({ data }: LocationWidgetProps) {
    return (
        <div>
            Latitude: {data.data.lat}, Longitude: {data.data.lon}
        </div>
    );
}
