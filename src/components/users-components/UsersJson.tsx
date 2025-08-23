import {useEffect, useState} from "react";
import UserJson from "../user-componennt/UserJson.tsx";
import type {IUsersJson} from "../../models/jsonplaceholder-models/json-users-model/IJsonModel.ts";



const UsersJson = () => {
    const [users, setUsers] = useState<IUsersJson[]>([]) ;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    })
    return (
        <div>
            {
                users.map((user) => (<UserJson key={user.id} item={user}/>))
            }
        </div>
    );
};

export default UsersJson;