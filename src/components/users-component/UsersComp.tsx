import {useEffect, useState} from "react";
import type {IUser} from "../../models/users-dymmy-model/IUsersDummy.ts";
import type {IUserResponseModel} from "../../models/users-dymmy-model/IUserResponseModel.ts";
import UserComp from "../user-component/UserComp.tsx";
import {userService} from "../../constans/api.services.ts";



const UsersComp = () => {

   const [users, setUsers] = useState<IUser[]>([]);

   useEffect(() => {
      userService.getAllUsers()
       .then(({users}: IUserResponseModel)=> setUsers(users));
   }, []);



    return (
        <div>
            {
                users.map((user :IUser) => <UserComp key={user.id} item={user}/>)



            }
        </div>
    );
};

export default UsersComp;