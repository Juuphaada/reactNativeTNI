import axios, {AxiosResponse,AxiosError} from "axios";
//create intance 
const http = axios.create({
    headers:{'Content-Type':'application/json'} //ทุก request ที่ ผ่าน instant นี้ ต้องเป็น type json
});

export {http};
export type {AxiosResponse,AxiosError};