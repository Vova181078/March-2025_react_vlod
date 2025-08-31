import {useEffect, useState} from "react";
import {userService} from "../../services/api.services.ts";
import type {IUserModel} from "../../models/users-model/IUserModel.ts";
import type {IUserResolves} from "../../models/users-model/IUserResolves.ts";
import UserComponent from "../user-component/UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]> ([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResolves) => {
                setUsers(users)
            });

    }, []);

    return (
        <div>
            {
                users.map((user: IUserModel) => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;