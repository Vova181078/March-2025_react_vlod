import type {FC} from "react";
import type {IUserModel} from "../models/IJsonUserModel.ts";

interface UserComponentProps {
    item: IUserModel
}

const UserComponent:FC<UserComponentProps> = ({item}: UserComponentProps) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <p>{item.name}</p>
            <p>{item.email}</p>
        </div>
    );
};

export default UserComponent;