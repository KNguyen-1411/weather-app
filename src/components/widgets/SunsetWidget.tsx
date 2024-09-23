import { IWeatherBaseData } from '@/types/global';

interface SunsetWidgetProps {
    data: IWeatherBaseData;
}

export default function SunsetWidget({ data }: SunsetWidgetProps) {
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return (
        <div>
            <strong>Sunset Time:</strong> {sunsetTime}
            <p>sunrise {data.sys.sunrise}</p>
        </div>
    );
}
