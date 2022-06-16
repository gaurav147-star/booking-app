import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://aron-hotel-booking.herokuapp.com/api/"
})

export default axiosInstance