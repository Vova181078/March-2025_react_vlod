import type {FC} from "react";

import {useNavigate} from "react-router-dom";
import type {IUserModel} from "../../models/users-model/IUserModel.ts";

type UserProps = {
    item: IUserModel;
}

const UserComponent:FC<UserProps> = ({item}) => {
    const navigation = useNavigate();

    const onButtonClickNavi = () => {
        navigation('/users/' + item.id + '/carts')
    }


    return (
        <div>
            <p>{item.firstName}</p>
            <p>{item.email}</p>

            <button onClick={onButtonClickNavi}>click me</button>
        </div>
    );
};

export default UserComponent;