import {useEffect, useState} from "react";
import type {ICarModel} from "../../models/cars-model/CarModel.ts";
import {getCars} from "../../services/api.service.ts";
import CarComponent from "../car-component/CarComponent.tsx";


const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([])
     useEffect(() => {
         getCars().then((response)=> {
             setCars(response)
         })
     }, [])
    return (
        <div>
            {cars.map((car) => <CarComponent item={car} key={car.id} />)}
        </div>
    );
};

export default CarsComponent;