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
    const getLocation = await fetch(
        `${globalConfig.ApiGeoUrl}direct?appid=${globalConfig.ApiKey}&q=${city}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    const location = await getLocation.json();
    const response = await fetch(
        `${globalConfig.ApiBaseUrl}air_pollution?appid=${globalConfig.ApiKey}&lat=${location[0].lat}&lon=${location[0].lon}`,
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
    const getLocation = await fetch(
        `${globalConfig.ApiGeoUrl}direct?appid=${globalConfig.ApiKey}&q=${city}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    const location = await getLocation.json();
    const response = await fetch(
        `${globalConfig.ApiMeteo}?latitude=${location[0].lat}&longitude=${location[0].lon}&daily=uv_index_max&timezone=Asia%2FBangkok`,
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
    return {
        ok: response.ok,
        status: response.status,
        ...data,
    };
};
