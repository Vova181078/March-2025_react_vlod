import type {ICarModel} from "../../models/cars-model/CarModel.ts";
import type {FC} from "react";

type carProps= {
    item: ICarModel
}

const CarComponent:FC<carProps> = ({item}) => {
    return (
        <div>
            <h3>{item.brand}</h3>
            <p>{item.year}</p>
            <p>{item.price}</p>

        </div>
    );
};

export default CarComponent;