import {Link, Outlet} from "react-router-dom";


const PostsPage = () => {
    return (
        <div>
            <h2>Posts Page</h2>
            <ul>
                <li><Link to="jsonplaceholder">JSON Placeholder Posts</Link></li>
                <li><Link to="dummyjson">DummyJSON Posts</Link></li>
            </ul>


            <Outlet />
        </div>
    );
};

export default PostsPage;