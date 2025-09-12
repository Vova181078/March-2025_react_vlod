import {useForm} from "react-hook-form";
import type {ICarModel} from "../../models/cars-model/CarModel.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/CarValidator.ts";
import {addCar} from "../../services/api.service.ts";



const CreateCarsComponent = () => {
  const { register,handleSubmit, formState: {errors}} = useForm<ICarModel>({
       mode: 'all',
      resolver: joiResolver(carValidator)
    })

    const createHandler = (data: ICarModel) => {
      addCar(data);


    }



    return (
        <div>

            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                  <input type="text" {...register('brand')}/>
                  <div>{errors.brand?.message}</div>
                </div>
                <div>
                   <input type="number" {...register('price')}/>
                   <div>{errors.price?.message}</div>
                </div>
                <div>
                   <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>save car</button>
            </form>
        </div>
    )
}

export default CreateCarsComponent;


