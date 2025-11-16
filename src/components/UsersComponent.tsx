import {useAppDispatch, useAppSelector} from "../redux/store.tsx";
import { useEffect} from "react";
import type {IUsers} from "../models/IUsers.ts";
import UserComponent from "./user-component/UserComponent.tsx";
import {userActions} from "../redux/slices/UserSlice.ts";




const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users)
    useEffect(() => {
        dispatch(userActions.loadUsers());

    }, []);
    return (
        <div>
            {
                users.map((user: IUsers) => <UserComponent key={user.id} item={user}/>)
            }
            </div>
    );
};

export default UsersComponent;