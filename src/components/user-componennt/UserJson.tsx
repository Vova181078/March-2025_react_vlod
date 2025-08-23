import type {FC} from "react";
import type {IUsersJson} from "../../models/jsonplaceholder-models/json-users-model/IJsonModel.ts";

type UserJsonProps = {
    item: IUsersJson
}

const UserJson:FC<UserJsonProps> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.address.street}</p>
        </div>
    );
};

export default UserJson;