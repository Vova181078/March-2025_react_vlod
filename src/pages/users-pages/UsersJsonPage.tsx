import UsersJson from "../../components/users-components/UsersJson.tsx";
import {Outlet} from "react-router-dom";


const UsersJsonPage = () => {
    return (
        <div>
            <h2>Users jsonplaceholder:</h2>
            <UsersJson/>
            <Outlet/>
            </div>
    );
};

export default UsersJsonPage;