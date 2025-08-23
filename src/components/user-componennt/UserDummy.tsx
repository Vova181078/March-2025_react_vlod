import type {FC} from "react";
import type {IUsersDummy} from "../../models/dymmyjson-models/dymmy-users-model/IDummyModel.ts";

type UserDummyProps = {
    item: IUsersDummy
}

const UserDummy:FC<UserDummyProps> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.maidenName}</p>
            <p>{item.age}</p>
            <p>{item.gender}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.username}</p>
            <p>{item.password}</p>
            <p>{item.birthDate}</p>
            <p>{item.image}</p>
        </div>
    );
};

export default UserDummy;