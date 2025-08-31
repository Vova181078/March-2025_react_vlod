import type { ICartModel } from "./ICartModel";

export interface ICartResolves {
    total: number;
    skip: number;
    limit: number;
    carts: ICartModel[];
}