import type {ITodosModel} from "../models/TodosModel.ts";
import type {ITodoDummjsonModel} from "../models/TodoDummyjsonModel.ts";

const getTodos = async ():Promise<ITodosModel[]> => {

   const response:ITodoDummjsonModel = await fetch(import.meta.env.VITE_API_BASE_URL + '/todos')
        .then(value => value.json())
    return response.todos;
}

export { getTodos }