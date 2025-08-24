import type {FC} from "react";
import type {IUsersDummy} from "../../models/dymmyjson-models/dymmy-users-model/IDummyModel.ts";

type UserDummyProps = {
    item: IUsersDummy
}

const UserDummy:FC<UserDummyProps> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>firstName: {item.firstName}</p>
            <p>lastName: {item.lastName}</p>
            <p>maidenName: {item.maidenName}</p>
            <p>age: {item.age}</p>
            <p>gender: {item.gender}</p>
            <p>email: {item.email}</p>
            <p>phone: {item.phone}</p>
            <p>username: {item.username}</p>
            <p>password: {item.password}</p>
            <p>birthDate: {item.birthDate}</p>
        </div>
    );
};

export default UserDummy;