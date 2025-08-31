import type {IUser} from "./IUsersDummy.ts";

export interface IUserResponseModel {
    total: number,
    skip: number,
    limit: number,
    users: IUser[],

}