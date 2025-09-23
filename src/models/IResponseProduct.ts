import type {IProduct} from "./products/IProducts.ts";

export interface IResponseProduct
{
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}