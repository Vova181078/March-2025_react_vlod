import type {ITodosModel} from "./TodosModel.ts";

 export interface ITodoDummjsonModel {
    todos:ITodosModel[],
    total: number,
    skip: number,
    limit: number,
}

