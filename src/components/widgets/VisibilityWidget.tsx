import { IWeatherBaseData } from '@/types/global';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { Visibility_Cmt } from '@/lib/MapCmt';
import { Eye } from 'lucide-react';

interface VisibilityWidgetProps {
    data: IWeatherBaseData;
}
export default function VisibilityWidget({ data }: VisibilityWidgetProps) {
    // return <div>{data.visibility / 1000} Km/h</div>;
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <Eye className="mr-1" />
                    Tầm nhìn xa
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold text-center">
                    {data.visibility / 1000} Km/h
                </div>
            </CardContent>
            <CardFooter>
                <p>{Visibility_Cmt(data.visibility / 1000)}</p>
            </CardFooter>
        </>
    );
}
