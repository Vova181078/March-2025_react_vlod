import axios from "axios";
import type {ICarModel} from "../models/cars-model/CarModel.ts";


const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1",
    headers: {"Content-Type": "application/json"}
})

export const getCars = async ():Promise<ICarModel[]> => {
 const axiosResponse = await axiosInstance.get<ICarModel[]>('/cars')
    console.log(axiosResponse)
    const cars = axiosResponse.data;
    console.log(cars);
    return cars;

}

export const addCar = async (car:ICarModel)=> {
   await axiosInstance.post('/cars', car)
}