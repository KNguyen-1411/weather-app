'use client';
import { IWeatherData } from '@/types/global';
export const setData = (data: IWeatherData) => {
    const dateH = new Date();
    const currentHour = dateH.getHours();
    const currentDay = dateH.getDay();
    let hour = currentHour;
    let dayOffset = 0;

    const dayNames = [
        'Chủ Nhật',
        'Thứ 2',
        'Thứ 3',
        'Thứ 4',
        'Thứ 5',
        'Thứ 6',
        'Thứ 7',
    ];

    data.list.forEach((item) => {
        const tempTime = {
            day: null as string | null,
            time: null as string | null,
            date: null as string | null,
        };
        const date = new Date(item.dt_txt);
        if (hour >= 24) {
            dayOffset++;
            hour = hour - 24;
        }
        date.setHours(hour);
        tempTime.day = dayNames[(currentDay + dayOffset) % 7];
        tempTime.time = `${date.getHours()}:00`;
        const temp = new Date();
        temp.setDate(temp.getDate() + dayOffset);
        tempTime.date = `${temp.getDate()}/${
            temp.getMonth() + 1
        }/${temp.getFullYear()}`;

        hour += 3;
        if (tempTime.time !== 'NaN:00' && tempTime.date !== 'NaN/NaN/NaN') {
            item.dt_txt = `${tempTime.day}|${tempTime.time}|${tempTime.date}`;
        }
    });

    data.list.forEach((item) => {
        item.main.temp = Math.round(item.main.temp);
        item.main.temp_min = parseFloat(item.main.temp_min.toFixed(1)) || 0;
        item.main.temp_max = parseFloat(item.main.temp_max.toFixed(1)) || 0;
    });

    return data;
};
