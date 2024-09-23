export interface ICitySearch {
    city?: string;
}

export interface IWeatherBaseData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface IWeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: Array<{
        dt: number;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
        };
        weather: Array<{
            id: number;
            main: string;
            description: string;
            icon: string;
        }>;
        clouds: {
            all: number;
        };
        wind: {
            speed: number;
            deg: number;
        };
        visibility: number;
        pop: number;
        rain?: {
            '3h': number;
        };
        sys: {
            pod: string;
        };
        dt_txt: string;
    }>;
}

export interface IAirPollutionData {
    coord: {
        lon: number;
        lat: number;
    };
    list: Array<{
        main: {
            aqi: number;
        };
        components: {
            co: number;
            no: number;
            no2: number;
            o3: number;
            so2: number;
            pm2_5: number;
            pm10: number;
            nh3: number;
        };
        dt: number;
    }>;
}

export interface IUvIndexData {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_offset: number;
    elevation: number;
    daily: {
        time: Array<string>;
        uv_index_max: Array<number>;
    };
}

export interface IGeocodeData {
    data: {
        lat: number;
        lon: number;
    };
}
