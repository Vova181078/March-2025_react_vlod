import UsersDummy from "../../components/users-components/UsersDummy.tsx";
import {Outlet} from "react-router-dom";


const UsersDummyPage = () => {
    return (
        <div>
            <h2>Users Dummyjson:</h2>
            <UsersDummy/>
            <Outlet/>
        </div>
    );
};

export default UsersDummyPage;