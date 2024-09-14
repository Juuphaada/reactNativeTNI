import {AxiosResponse} from 'axios'
import { http } from './http-service';

//Promise ประเภทพังชั่ง <AxiosResponse> รูปแบบ
export async function findAllProduct():Promise<AxiosResponse>{  
    try{
        const resposnse = await http.get<any>('https://api.codingthailand.com/api/course')
        // http  instantที่สร้างใน http-sevice.ts
        return resposnse;
    }catch (error){
        throw error;
    }
}

export async function findProductbyId(id:number):Promise<AxiosResponse>{  
    try{
        const resposnse = await http.get<any>('https://api.codingthailand.com/api/course/2')
        // http  instantที่สร้างใน http-sevice.ts
        return resposnse;
    }catch (error){
        throw error;
    }
}


