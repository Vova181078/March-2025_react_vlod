import {useEffect, useState} from "react";
import {loadAuthProduct, refresh} from "../services/api.services.ts";

import ProductComp from "./ProductComp.tsx";
import type {IProduct} from "../models/products/IProducts.ts";


const AuthResourceComponent = () => {
   const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
       loadAuthProduct()
           .then(products => {
               setProducts(products);
           }).catch(reason => {
               console.log(reason);
               refresh()
                   .then(() => loadAuthProduct())
                   .then(products => {
                       setProducts(products);
                   })
       })
    }, []);
    return (
        <div>

            {products.map((product) => <ProductComp key={product.id} item={product}/>)}

        </div>
    );
};

export default AuthResourceComponent;