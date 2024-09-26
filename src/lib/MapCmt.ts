/**
 * Đánh giá chỉ số UV (UV Index) dựa trên giá trị đầu vào.
 * @param {number} uv - Giá trị chỉ số UV.
 * @returns {string} - Đánh giá về mức độ nguy hiểm của chỉ số UV.
 */
export const UVIndex_Cmt = (uv: number): string => {
    if (uv < 3) {
        return 'Chỉ số UV thấp, ít nguy hiểm cho sức khỏe.';
    } else if (uv < 6) {
        return 'Chỉ số UV trung bình, cần thận trọng khi ra ngoài.';
    } else if (uv < 8) {
        return 'Chỉ số UV cao, nên sử dụng kem chống nắng và hạn chế ra ngoài.';
    } else if (uv < 11) {
        return 'Chỉ số UV rất cao, cần bảo vệ da nghiêm ngặt.';
    } else {
        return 'Chỉ số UV nguy hiểm, nên tránh ánh nắng trực tiếp.';
    }
};

/**
 * Đánh giá chất lượng không khí (Air Quality) dựa trên chỉ số ô nhiễm.
 * @param {number} cs - Giá trị chỉ số chất lượng không khí.
 * @returns {string} - Đánh giá về chất lượng không khí.
 */
export const Air_Cmt = (cs: number): string => {
    if (cs < 50) {
        return 'Chất lượng không khí tốt, an toàn cho sức khỏe.';
    } else if (cs < 100) {
        return 'Chất lượng không khí trung bình, không có nguy cơ.';
    } else if (cs < 150) {
        return 'Chất lượng không khí không tốt cho người nhạy cảm.';
    } else if (cs < 200) {
        return 'Chất lượng không khí không tốt, nên hạn chế hoạt động ngoài trời.';
    } else if (cs < 300) {
        return 'Chất lượng không khí rất không tốt, cần tránh ra ngoài.';
    } else {
        return 'Chất lượng không khí nguy hiểm, nên ở trong nhà.';
    }
};

/**
 * Đánh giá cảm giác nhiệt độ (Feels Like) dựa trên giá trị nhiệt độ.
 * @param {number} cs - Giá trị nhiệt độ cảm nhận.
 * @returns {string} - Đánh giá về cảm giác nhiệt độ.
 */
export const FeelsLike_Cmt = (cs: number): string => {
    if (cs < 10) {
        return 'Nhiệt độ rất lạnh, cần mặc ấm.';
    } else if (cs < 20) {
        return 'Nhiệt độ lạnh, nên mặc áo ấm.';
    } else if (cs < 30) {
        return 'Nhiệt độ mát mẻ, dễ chịu cho hoạt động ngoài trời.';
    } else if (cs < 40) {
        return 'Nhiệt độ nóng, cần uống đủ nước và tránh ánh nắng.';
    } else {
        return 'Nhiệt độ rất nóng, cần ở trong bóng râm và giữ cơ thể mát mẻ.';
    }
};

/**
 * Đánh giá độ ẩm (Humidity) dựa trên giá trị độ ẩm.
 * @param {number} cs - Giá trị độ ẩm không khí.
 * @returns {string} - Đánh giá về độ ẩm không khí.
 */
export const Humidity_Cmt = (cs: number): string => {
    if (cs < 30) {
        return 'Độ ẩm thấp, không khí khô.';
    } else if (cs < 60) {
        return 'Độ ẩm vừa phải, cảm giác thoải mái.';
    } else {
        return 'Độ ẩm cao, không khí ẩm ướt.';
    }
};

/**
 * Đánh giá độ nhìn (Visibility) dựa trên giá trị tầm nhìn.
 * @param {number} cs - Giá trị tầm nhìn (km).
 * @returns {string} - Đánh giá về độ nhìn.
 */
export const Visibility_Cmt = (cs: number): string => {
    if (cs < 1) {
        return 'Tầm nhìn rất kém, nguy hiểm khi lái xe.';
    } else if (cs < 3) {
        return 'Tầm nhìn kém, cần cẩn thận khi di chuyển.';
    } else if (cs < 5) {
        return 'Tầm nhìn trung bình, có thể di chuyển nhưng vẫn cần chú ý.';
    } else if (cs < 10) {
        return 'Tầm nhìn tốt, an toàn cho hoạt động.';
    } else {
        return 'Tầm nhìn rất tốt, không có vấn đề gì.';
    }
};

/**
 * Đánh giá áp suất khí quyển (Pressure) dựa trên giá trị áp suất.
 * @param {number} cs - Giá trị áp suất khí quyển (hPa).
 * @returns {string} - Đánh giá về áp suất khí quyển.
 */
export const Pressure_Cmt = (cs: number): string => {
    if (cs < 1000) {
        return 'Áp suất thấp, có thể có thời tiết xấu.';
    } else if (cs < 1020) {
        return 'Áp suất bình thường, thời tiết ổn định.';
    } else {
        return 'Áp suất cao, có thể ảnh hưởng đến thời tiết.';
    }
};
