import type {IUsers} from "./UsersModel.ts";

 export interface IResponseUsers {
    users: IUsers[];
    total: number;
    skip: number;
    limit: number
}