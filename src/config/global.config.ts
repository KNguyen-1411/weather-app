interface IGlobalConfig {
    ApiBaseUrl: string;
    ApiGeoUrl: string;
    ApiMeteo: string;
    ApiKey: string;
    ApiLang: string;
    ApiUnits: string;
}
export const globalConfig: IGlobalConfig = {
    ApiBaseUrl:
        process.env.API_BASE_URL ||
        'https://api.openweathermap.org/data/2.5/weather',
    ApiGeoUrl:
        process.env.API_URL_GEO || 'http://api.openweathermap.org/geo/1.0/',
    ApiMeteo:
        process.env.API_METEO_URL || 'https://api.open-meteo.com/v1/forecast',
    ApiKey: process.env.API_KEY || 'none',
    ApiLang: process.env.API_LANG || 'vi',
    ApiUnits: process.env.API_UNITS || 'metric',
};
