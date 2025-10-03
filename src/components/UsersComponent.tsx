import useFetch from "../hooks/useFetch.tsx";
import UserComponent from "./UserComponent.tsx";
import type {IUserModel} from "../models/IJsonUserModel.ts";


const UsersComponent = () => {

    const users =
        useFetch<IUserModel[]>('https://jsonplaceholder.typicode.com/users',[])

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user} />)

            }
        </div>
    );
};

export default UsersComponent;