import { IUvIndexData } from '@/types/global';
import { Progress } from '../UI/progress';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../UI/card';

interface UvIndexWidgetProps {
    data: IUvIndexData;
}
export default function UvIndexWidget({ data }: UvIndexWidgetProps) {
    return (
        <>
            <CardHeader>
                <CardTitle>Chỉ số UV</CardTitle>
            </CardHeader>
            <CardContent>
                <div>{data.daily.uv_index_max[0]}</div>
                <Progress value={data.daily.uv_index_max[0] * 5} />
            </CardContent>
            <CardFooter>
                <p>Ở lâu ngoài trời có thể bỏng rát da </p>
            </CardFooter>
        </>
    );
}
