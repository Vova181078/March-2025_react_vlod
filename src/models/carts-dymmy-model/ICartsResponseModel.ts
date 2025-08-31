
import type {ICart} from "./ICartsDummy.ts";

export interface ICartsResponseModel {
    total: number,
    skip: number,
    limit: number,
    carts: ICart[],

}