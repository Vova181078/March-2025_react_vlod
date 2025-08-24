import type {FC} from "react";
import type {IUsersJson} from "../../models/jsonplaceholder-models/json-users-model/IJsonModel.ts";

type UserJsonProps = {
    item: IUsersJson
}

const UserJson:FC<UserJsonProps> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>name: {item.name}</p>
            <p>username: {item.username}</p>
            <p>email: {item.email}</p>
            <p>address: {item.address.street}</p>
        </div>
    );
};

export default UserJson;