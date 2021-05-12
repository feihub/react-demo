//Axios 实例，创建一个实例
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
});

export default axiosInstance;
