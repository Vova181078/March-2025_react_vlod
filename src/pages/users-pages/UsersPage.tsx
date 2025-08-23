import {Link, Outlet} from "react-router-dom";
import UsersJson from "../../components/users-components/UsersJson.tsx";


const UsersPage = () => {
    return (
        <div>
            <UsersJson/>
            <h2>Users Page</h2>
            <ul>
                <li><Link to="jsonplaceholder">JSON Placeholder Users</Link></li>
                <li><Link to="dummyjson">DummyJSON Users</Link></li>
            </ul>


            <Outlet />
        </div>
    );
};

export default UsersPage;