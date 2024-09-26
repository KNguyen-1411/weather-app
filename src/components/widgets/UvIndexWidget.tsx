import { IUvIndexData } from '@/types/global';
import { Progress } from '../UI/progress';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';
import { UVIndex_Cmt } from '@/lib/MapCmt';
import { Sun } from 'lucide-react';
interface UvIndexWidgetProps {
    data: IUvIndexData;
}
export default function UvIndexWidget({ data }: UvIndexWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <Sun className="mr-1" />
                    Chỉ số UV
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center mb-3 text-xl">
                    <p className="mr-1 font-bold">
                        {data.daily.uv_index_max[0]}{' '}
                    </p>{' '}
                    (Moderate)
                </div>
                <Progress value={data.daily.uv_index_max[0] * 5} />
            </CardContent>
            <CardFooter>
                <p>{UVIndex_Cmt(data.daily.uv_index_max[0])}</p>
            </CardFooter>
        </>
    );
}
