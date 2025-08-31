import type {IUserModel} from "./IUserModel.ts";


export interface IUserResolves {
    total: number;
    skip: number;
    limit: number;
    users: IUserModel[];
}