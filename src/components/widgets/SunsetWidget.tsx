import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Sunrise, Sunset } from 'lucide-react';

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
            <CardContent className="p-0 relative flex flex-col items-center">
                <Sunset className="h-16 w-16 mb-2 animate-pulse" />
                <div className="flex flex-col  px-4 justify-between h-full">
                    <p className="text-xl font-bold">
                        {convertUnixTime(data.sys.sunset)}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center font-bold">
                <Sunrise className="mr-2 w-5" />
                {convertUnixTime(data.sys.sunrise)}
            </CardFooter>
        </>
    );
}
