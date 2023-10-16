import axios from "axios";
// MỤC ĐÍCH LÀ CẤU HÌNH REQUEST GỬI LÊN 

const BaseAxios = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
// BaseAxios.defaults.withCredentials = true;
BaseAxios.interceptors.request.use(
    async (config) => {
        let token;
        try {
            token = await localStorage.getItem("auth");
        } catch (e) { }

        if (token !== null) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
// after send request
BaseAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default BaseAxios;
