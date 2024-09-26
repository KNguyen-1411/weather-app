'use server';

import { globalConfig } from '@/config/global.config';

/**
 * Get data weather 5 days
 * @param city - city name
 */
export const getWeatherData = async ({ city }: { city: string }) => {
    const response = await fetch(
        `${globalConfig.ApiBaseUrl}/forecast?appid=${globalConfig.ApiKey}&lang=${globalConfig.ApiLang}&units=${globalConfig.ApiUnits}&q=${city}`,
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
        `${globalConfig.ApiBaseUrl}/weather?appid=${globalConfig.ApiKey}&lang=${globalConfig.ApiLang}&units=${globalConfig.ApiUnits}&q=${city}`,
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
 * Get data air pollution now
 * @param city - city name
 */
export const getAirPollutionData = async ({ city }: { city: string }) => {
    const location = await getGeocodeData({ city });

    const lat = location.ok && location.data ? location.data.lat : 0;
    const lon = location.ok && location.data ? location.data.lon : 0;

    const response = await fetch(
        `${globalConfig.ApiBaseUrl}air_pollution?appid=${globalConfig.ApiKey}&lat=${lat}&lon=${lon}`,
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
 * Get data uv index 7days
 * @param city - city name
 */
export const getUvIndexData = async ({ city }: { city: string }) => {
    const location = await getGeocodeData({ city });

    const lat = location.ok && location.data ? location.data.lat : 0;
    const lon = location.ok && location.data ? location.data.lon : 0;

    const response = await fetch(
        `${globalConfig.ApiMeteo}?latitude=${lat}&longitude=${lon}&daily=uv_index_max&timezone=Asia%2FBangkok`,
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
 * Get data geocode
 * @param city - city name
 */
export const getGeocodeData = async ({ city }: { city: string }) => {
    const response = await fetch(
        `${globalConfig.ApiGeoUrl}direct?appid=${globalConfig.ApiKey}&q=${city}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    const data = await response.json();
    if (response.ok && data.length > 0) {
        return {
            ok: response.ok,
            status: response.status,
            data: { lat: data[0].lat || 0, lon: data[0].lon || 0 },
        };
    } else {
        return {
            ok: false,
            status: response.status,
            data: { lat: 0, lon: 0 },
        };
    }
};
