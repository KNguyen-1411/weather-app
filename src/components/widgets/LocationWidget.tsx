import { IGeocodeData } from '@/types/global';

interface LocationWidgetProps {
    data: IGeocodeData;
}

export default function LocationWidget({ data }: LocationWidgetProps) {
    return (
        <div>
            {data[0].lat} {data[0].lon}
        </div>
    );
}
