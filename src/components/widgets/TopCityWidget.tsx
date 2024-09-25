import { MapPinned } from 'lucide-react';
import { CardContent, CardHeader, CardTitle } from '../UI/card';
import { Button } from '../UI/button';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

const topCities = [
    'Huế',
    'Hà Nội',
    'Thành phố Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',
    'Vũng Tàu',
    'Nha Trang',
];

export default function TopCityWidget() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const ToCity = (city: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (city) {
            params.set('city', city);
        } else {
            params.delete('city');
        }
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <>
            <CardHeader>
                <CardTitle>
                    <MapPinned className="mr-1" />
                    Thành phố hàng đầu
                </CardTitle>
            </CardHeader>
            <CardContent>
                {topCities.map((city, index) => (
                    <Button
                        key={index}
                        variant={'outline'}
                        className="block w-full mb-2 textOverFlow"
                        onClick={() => ToCity(city)}
                    >
                        {city}
                    </Button>
                ))}
            </CardContent>
        </>
    );
}
