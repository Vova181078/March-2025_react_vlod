import { Link, Outlet } from "react-router-dom";



const PostsPage = () => {
    return (

        <div>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>Posts Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'dummyjson'}>Posts Dummyjson</Link>
                </li>
            </ul>
            <Outlet/>

        </div>

    );
};

export default PostsPage;