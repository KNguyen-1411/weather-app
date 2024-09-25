import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Sunset } from 'lucide-react';

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
        <>
            <CardHeader>
                <CardTitle>
                    <Sunset className="mr-1" />
                    Mặt trời lặn
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative">
                <div className="flex flex-col  px-4 justify-between h-full">
                    <p className="text-2xl font-bold">
                        {convertUnixTime(data.sys.sunset)}
                    </p>
                </div>
                <div className="flex flex-col justify-center absolute top-0 opacity-40">
                    <svg width="100%" height="80">
                        <path
                            d="M 0 80 Q 120 -10, 170 50 T 400 100"
                            stroke="white"
                            strokeWidth="2"
                            fill="transparent"
                        />
                        <line
                            x1="0"
                            y1="60"
                            x2="100%"
                            y2="60"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </CardContent>
            <CardFooter>
                Mặt trời lặn {convertUnixTime(data.sys.sunrise)}
            </CardFooter>
        </>
    );
}
