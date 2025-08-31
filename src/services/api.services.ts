import type {IUserResolves} from "../models/users-model/IUserResolves.ts";
import type {ICartResolves} from "../models/carts-model/ICartResolves.ts";


export const baseUrl = import.meta.env.VITE_BASE_URL;

export const userService = {
    getAllUsers: async ():Promise<IUserResolves> => {
        return await fetch(baseUrl + '/users')
            .then(value => value.json())
    }
}

export const cartService =  {
     getAllCarts: async (userId: string):Promise<ICartResolves> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(value => value.json())
    }
}
