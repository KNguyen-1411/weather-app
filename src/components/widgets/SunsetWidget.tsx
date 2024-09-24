import { IWeatherBaseData } from '@/types/global';

interface SunsetWidgetProps {
    data: IWeatherBaseData;
}

const convertUnixTime = (unixTime: number) => {
    return new Date(unixTime * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
};

export default function SunsetWidget({ data }: SunsetWidgetProps) {
    return (
        // <div>
        //     <strong>Sunset Time:</strong> {convertUnixTime(data.sys.sunset)}
        //     <p>sunrise {convertUnixTime(data.sys.sunrise)}</p>
        // </div>
        <div>
            <p>Mặt trời lặn </p>
            <div className="min-h-20 flex flex-col justify-center">
                <hr />
            </div>
            {/* <svg width="200" height="200">
                <path
                    d="M 50 300 Q 200 50 350 300"
                    stroke="blue"
                    strokeWidth="3"
                    fill="transparent"
                />
            </svg> */}
        </div>
    );
}
