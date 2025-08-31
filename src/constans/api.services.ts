import type {IUserResponseModel} from "../models/users-dymmy-model/IUserResponseModel.ts";
import type {ICartsResponseModel} from "../models/carts-dymmy-model/ICartsResponseModel.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const userService = {
    getAllUsers: async ():Promise<IUserResponseModel> => {
         return await fetch(`${baseUrl}/users`)
        .then(res => res.json())
    }
};

export const cartService = {
    getAllCarts: async (userId: string):Promise<ICartsResponseModel> => {
       return await fetch(`${baseUrl}/carts/user/` + userId)
        .then(res => res.json())
    }
};