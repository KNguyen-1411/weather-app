import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';

interface VisibilityWidgetProps {
    data: IWeatherBaseData;
}
export default function VisibilityWidget({ data }: VisibilityWidgetProps) {
    // return <div>{data.visibility / 1000} Km/h</div>;
    return (
        <>
            <CardHeader>
                <CardTitle>Tầm nhìn xa</CardTitle>
            </CardHeader>
            <CardContent>
                <div>{data.visibility / 1000} Km/h</div>
            </CardContent>
            <CardFooter>
                <p>Độ xa của tầm nhìn</p>
            </CardFooter>
        </>
    );
}
