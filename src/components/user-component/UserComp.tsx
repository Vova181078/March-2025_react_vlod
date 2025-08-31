import type {FC} from "react";
import type {IUser} from "../../models/users-dymmy-model/IUsersDummy.ts";
import {useNavigate} from "react-router-dom";

type UserProps = {
    item: IUser;
}


const UserComp:FC<UserProps> = ({item}) => {
    const navigation = useNavigate();

    const onButtonclick = () => {
        navigation('/users/' + item.id + '/carts');
    }
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.firstName}</p>
            <p>{item.email}</p>
            <button onClick={onButtonclick}
            >click me
            </button>
        </div>
    );
};

export default UserComp;