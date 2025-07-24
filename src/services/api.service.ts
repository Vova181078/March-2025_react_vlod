import type {IToDosModel} from "../models/IToDosModel.ts";

const endPointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';


const getToDos = async ():Promise<IToDosModel[]> => {
 const arrayToDos:IToDosModel[] = await fetch(endPointTodos)
.then(result => result.json())
    return arrayToDos;
}

export {getToDos};