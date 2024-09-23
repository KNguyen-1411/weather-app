'use client';
import { IWeatherData } from '@/types/global';
import { useEffect, useState } from 'react';
interface useConvertDataWeatherProps {
    data: IWeatherData;
}

export const useConvertDataWeather = ({ data }: useConvertDataWeatherProps) => {
    return {
        data,
    };
};
