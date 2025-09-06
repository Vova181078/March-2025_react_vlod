import {useEffect, useState} from "react";
import type {IUsers} from "../../models/users-model/UsersModel.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";
import type {IResponseUsers} from "../../models/users-model/ResponseUsers.ts";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {

    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUsers[]>([]);
       useEffect(() => {

           const currentPage = searchParams.get('page') || '1'
          userService.getUsers(currentPage)
           .then(({users}: IResponseUsers) => {
               setUsers(users)
           })
       }, [searchParams]);
    return (
        <div>
            {users.map((user:IUsers) => <UserComponent key={user.id} item={user}/>)}

        </div>
    );
};

export default UsersComponent;