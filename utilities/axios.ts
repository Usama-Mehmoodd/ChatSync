import axios from "axios";

const base_url =
    import.meta.env.VITE_APP_ENVIRONMENT === "production"
        ? import.meta.env.VITE_PROD_URL
        : import.meta.env.VITE_LOCAL_URL;


const api = axios.create({
    baseURL : base_url,
    withCredentials : true
}); 


export default api;