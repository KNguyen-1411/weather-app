import { IUvIndexData } from '@/types/global';

interface UvIndexWidgetProps {
    data: IUvIndexData;
}
export default function UvIndexWidget({ data }: UvIndexWidgetProps) {
    return <div>{data.daily.uv_index_max[0]}</div>;
}
