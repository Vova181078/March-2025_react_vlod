import UsersComp from "../../components/users-component/UsersComp.tsx";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <UsersComp/>
        </div>
    );
};

export default UsersPage;