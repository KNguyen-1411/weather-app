export const UVIndex_Cmt = (uv: number): string => {
    if (uv < 3) {
        return 'Thấp';
    } else if (uv < 6) {
        return 'Trung bình';
    } else if (uv < 8) {
        return 'Cao';
    } else if (uv < 11) {
        return 'Rất cao';
    } else {
        return 'Nguy hiểm';
    }
};

export const Air_Cmt = (cs: number): string => {
    if (cs < 50) {
        return 'Tốt';
    } else if (cs < 100) {
        return 'Trung bình';
    } else if (cs < 150) {
        return 'Không tốt cho người nhạy cảm';
    } else if (cs < 200) {
        return 'Không tốt';
    } else if (cs < 300) {
        return 'Rất không tốt';
    } else {
        return 'Nguy hiểm';
    }
};

export const FeelsLike_Cmt = (cs: number): string => {
    if (cs < 10) {
        return 'Rất lạnh';
    } else if (cs < 20) {
        return 'Lạnh';
    } else if (cs < 30) {
        return 'Mát mẻ';
    } else if (cs < 40) {
        return 'Nóng';
    } else {
        return 'Rất nóng';
    }
};

export const Humidity_Cmt = (cs: number): string => {
    if (cs < 30) {
        return 'Khô';
    } else if (cs < 60) {
        return 'Thoải mái';
    } else {
        return 'Ẩm ướt';
    }
};

export const Visibility_Cmt = (cs: number): string => {
    if (cs < 1) {
        return 'Rất kém';
    } else if (cs < 3) {
        return 'Kém';
    } else if (cs < 5) {
        return 'Trung bình';
    } else if (cs < 10) {
        return 'Tốt';
    } else {
        return 'Rất tốt';
    }
};

export const Pressure_Cmt = (cs: number): string => {
    if (cs < 1000) {
        return 'Thấp';
    } else if (cs < 1020) {
        return 'Bình thường';
    } else {
        return 'Cao';
    }
};
