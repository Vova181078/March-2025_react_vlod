import type {IResponseUsers} from "../models/users-model/ResponseUsers.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;




export const userService = {
   getUsers: async (page: string): Promise<IResponseUsers> => {
       let skip = 0;
       const limit = 30;
       if (+page >= 0) {
        skip = limit * (+page) - limit;
}
//        const limit = 30;
//        const skip = limit * (+page) - limit;

{
        return await fetch(baseUrl + '/users'  + '?skip=' + skip)
            .then(res => res.json())
    }

}
}