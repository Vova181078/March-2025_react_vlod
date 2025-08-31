import type {FC} from "react";
import type {ICart} from "../../models/carts-dymmy-model/ICartsDummy.ts";

type CartProps = {
    item: ICart
}

const CartComp:FC<CartProps> = ({item}) => {
    return (
        <div>
            <p>{item.total}</p>
            <p>{item.userId}</p>
            <p>{item.totalProducts}</p>
        </div>
    );
};

export default CartComp;