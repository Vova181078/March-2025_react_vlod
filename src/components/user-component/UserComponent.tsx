import type {FC} from "react";
import type {IUsers} from "../../models/IUsers.ts";

type UserProps = {
    item: IUsers;
}

const UserComponent:FC<UserProps> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <div>{item.name}</div>
            <div>{item.username}</div>
            <div>{item.email}</div>
        </div>
    );
};

export default UserComponent;