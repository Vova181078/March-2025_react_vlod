import {useEffect, useState} from "react";
import UserDummy from "../user-componennt/UserDummy.tsx";
import type {IUsersDummy} from "../../models/dymmyjson-models/dymmy-users-model/IDummyModel.ts";
import {getDummyUsers} from "../../services/api.services.ts";


const UsersDummy = () => {
    const [users, setUsers] = useState<IUsersDummy[]>([]);
    useEffect(() => {
            getDummyUsers()
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