import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    baseURL: 'https://netease-cloud-music-api-opal-eight.vercel.app/'
});

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
    const { data } = await instance.request<T>(config);
    return data;
}

// 可以配置拦截器
// instance.interceptors.response.use((response) => {
//     return response.data;
// })

export default request;