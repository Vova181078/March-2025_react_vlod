import {useEffect, useState} from "react";
import UserDummy from "../user-componennt/UserDummy.tsx";
import type {IUsersDummy} from "../../models/dymmyjson-models/dymmy-users-model/IDummyModel.ts";


const UsersDummy = () => {
    const [users, setUsers] = useState<IUsersDummy[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    })
    return (
        <div>
            {
                users.map((user) => (<UserDummy key={user.id} item={user} />))
            }
        </div>
    );
};

export default UsersDummy;