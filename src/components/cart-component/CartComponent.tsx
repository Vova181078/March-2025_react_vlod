import type {FC} from "react";
import type {ICartModel} from "../../models/carts-model/ICartModel.ts";

type CartProps = {
   item: ICartModel
}

const CartComponent:FC<CartProps> = ({item}) => {
    return (
        <div>
            <p>{item.userId}</p>
            <p>{item.total}</p>
        </div>
    );
};

export default CartComponent;