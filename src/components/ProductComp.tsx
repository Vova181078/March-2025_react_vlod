import type {FC} from "react";
import type {IProduct} from "../models/products/IProducts.ts";

type ProductType = {
    item: IProduct;
}

const ProductComp:FC<ProductType> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <p>{item.brand}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    );
};

export default ProductComp;