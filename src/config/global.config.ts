interface IGlobalConfig {
    ApiUrl: string;
    ApiBaseUrl: string;
    ApiKey: string;
    ApiLang: string;
    ApiUnits: string;
}
export const globalConfig: IGlobalConfig = {
    ApiUrl:
        process.env.API_URL ||
        'https://api.openweathermap.org/data/2.5/forecast',
    ApiBaseUrl:
        process.env.API_BASE_URL ||
        'https://api.openweathermap.org/data/2.5/weather',
    ApiKey: process.env.API_KEY || 'none',
    ApiLang: process.env.API_LANG || 'vi',
    ApiUnits: process.env.API_UNITS || 'metric',
};
