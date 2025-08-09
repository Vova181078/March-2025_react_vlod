import { Link, Outlet } from "react-router-dom";



const CommentsPage = () => {
    return (

        <div>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>Comments Jsonplaceholder</Link>
                </li>
            </ul>
            <Outlet/>


        </div>


    );
};

export default CommentsPage;