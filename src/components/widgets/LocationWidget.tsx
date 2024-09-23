import { IGeocodeData } from '@/types/global';

interface LocationWidgetProps {
    data: IGeocodeData;
}

export default function LocationWidget({ data }: LocationWidgetProps) {
    return (
        <div>
            {data.data.lat} {data.data.lon}
        </div>
    );
}
