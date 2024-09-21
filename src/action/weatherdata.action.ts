'use server';

import { globalConfig } from '@/config/global.config';

/**
 * Get data weather 5 days
 * @param city - city name
 */
export const getWeatherData = async ({ city }: { city: string }) => {
    const response = await fetch(
        `${globalConfig.ApiUrl}appid=${globalConfig.ApiKey}&lang=${globalConfig.ApiLang}&units=${globalConfig.ApiUnits}&q=${city}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    const data = await response.json();
    return {
        ok: response.ok,
        status: response.status,
        ...data,
    };
};

/**
 * Get data weather now
 * @param city - city name
 */
export const getWeatherBaseData = async ({ city }: { city: string }) => {
    const response = await fetch(
        `${globalConfig.ApiBaseUrl}appid=${globalConfig.ApiKey}&lang=${globalConfig.ApiLang}&units=${globalConfig.ApiUnits}&q=${city}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    const data = await response.json();
    return {
        ok: response.ok,
        status: response.status,
        ...data,
    };
};
