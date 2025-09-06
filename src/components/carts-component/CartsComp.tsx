import {useEffect, useState} from "react";
import CartComp from "../cart-component/CartComp.tsx";
import {useParams} from "react-router-dom";
import type {ICartsResponseModel} from "../../models/carts-dymmy-model/ICartsResponseModel.ts";
import type {ICart} from "../../models/carts-dymmy-model/ICartsDummy.ts";
import {cartService} from "../../services/api.services.ts";


const CartsComp = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (id) {
            cartService.getAllCarts(id)
            .then(({carts}: ICartsResponseModel)=> {
                setCarts(carts);
            });

        }
    }, [id])


    return (
        <div>
            {
                carts.map(cart => <CartComp key={cart.id} item={cart}/>)
            }
        </div>
    );
};

export default CartsComp;