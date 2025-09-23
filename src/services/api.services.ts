
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/products/IProducts.ts";
import type {IResponseProduct} from "../models/IResponseProduct.ts";
import {retriveLocalStoriage} from "./helpers.ts";
import type {IRefreshPairsToken} from "../models/IRefreshPairsToken.ts";
import {axiosInstance} from "./urls.ts";



type loginData = {
    username: string,
    password: string,
    expiresInMins: number
}


axiosInstance.interceptors.request.use((requestObject ) => {

   if (requestObject.method?.toUpperCase() === 'GET') {
       requestObject.headers.Authorization = 'Bearer ' + retriveLocalStoriage<IUserWithTokens>('user').accessToken

   }
       return requestObject;
})




export const login = async ({username,password, expiresInMins}:loginData):Promise<IUserWithTokens> => {
 const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens

}

export const loadAuthProduct = async ():Promise<IProduct[]> => {
  const {data:{products}} =  await axiosInstance.get<IResponseProduct>('/products')
    return products
}

export const refresh = async () => {
    const IUserWithTokens = retriveLocalStoriage<IUserWithTokens>('user');
   const {data: {accessToken, refreshToken}} = await axiosInstance.post<IRefreshPairsToken>('/refresh', {refreshToken: IUserWithTokens.refreshToken,expiresInMins: 1
   });
   IUserWithTokens.accessToken = accessToken;
   IUserWithTokens.refreshToken = refreshToken;
   localStorage.setItem("user", JSON.stringify(IUserWithTokens));

}
