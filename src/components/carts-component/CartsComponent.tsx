import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {cartService} from "../../services/api.services.ts";
import type {ICartResolves} from "../../models/carts-model/ICartResolves.ts";
import CartComponent from "../cart-component/CartComponent.tsx";
import type {ICartModel} from "../../models/carts-model/ICartModel.ts";


const CartsComponent = () => {
   const [carts, setCarts] = useState<ICartModel[]> ([]);
    const {id} = useParams();

    useEffect(() => {
        if(id) {
        cartService.getAllCarts(id)
            .then(({carts}:ICartResolves) => {
               setCarts(carts);
            })
        }

    }, [id])

    return (
        <div>
            {
                carts.map((cart:ICartModel) => <CartComponent key={id} item={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;