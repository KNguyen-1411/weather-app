'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

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
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
