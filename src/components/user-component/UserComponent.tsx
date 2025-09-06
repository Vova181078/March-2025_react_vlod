import type {FC} from "react";
import type {IUsers} from "../../models/users-model/UsersModel.ts";

type UserProps = {
   item: IUsers
}


const UserComponent:FC<UserProps> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.firstName}</p>
            <p>{item.email}</p>
        </div>
    );
};

export default UserComponent;