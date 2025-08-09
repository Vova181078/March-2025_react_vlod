import { Link, Outlet } from "react-router-dom";



const UsersPage = () => {
    return (

        <div>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>Users Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">Users Dummyjson</Link>
                </li>
            </ul>
            <Outlet/>


        </div>

    );
};

export default UsersPage;