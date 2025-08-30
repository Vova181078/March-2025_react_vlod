import {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent.tsx";
import type {IUsers} from "../../models/users-model/IUsers.ts";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
       getUsers()
        .then(data => setUsers(data))

    }, [])
    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id} item={user}/>))}
        </div>
    );
};

export default UsersComponent;