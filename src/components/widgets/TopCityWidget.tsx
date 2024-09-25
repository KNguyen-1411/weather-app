import { MapPinned } from 'lucide-react';
import { CardHeader, CardTitle } from '../UI/card';

export default function TopCityWidget() {
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <MapPinned className="mr-1" />
                    Thành phố hàng đầu
                </CardTitle>
            </CardHeader>
        </>
    );
}
