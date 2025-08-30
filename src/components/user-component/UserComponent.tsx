import type {FC} from "react";
import type {IUsers} from "../../models/users-model/IUsers.ts";

type UserProps = {
    item: IUsers
}

const UserComponent:FC<UserProps> = ({item}) => {
    return (
        <div>

            <p>firstName: {item.firstName}</p>
            <p>lastName: {item.lastName}</p>
            <p>maidenName: {item.maidenName}</p>
            <p>age: {item.age}</p>
            <p>gender: {item.gender}</p>
        </div>
    );
};

export default UserComponent;