import { IUvIndexData } from '@/types/global';
import { Progress } from '../UI/progress';

interface UvIndexWidgetProps {
    data: IUvIndexData;
}
export default function UvIndexWidget({ data }: UvIndexWidgetProps) {
    return (
        <div>
            <Progress value={data.daily.uv_index_max[0] * 5} />
        </div>
    );
}
