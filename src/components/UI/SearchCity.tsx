'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { Input } from './input';
import { Button } from './button';

export default function SearchCity() {
    const [city, setCity] = useState('');
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    /**
     * Handle filter
     * @param event - Form submit event
     */
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (city) {
            params.set('city', city);
        } else {
            params.delete('city');
        }
        setCity('');
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mx-4">
            <form onSubmit={handleSearch}>
                <div className="flex w-96 items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant={'secondary'}
                        className="border dark:invert"
                    >
                        Search
                    </Button>
                </div>
            </form>
        </div>
    );
}
