import {Link, Outlet} from "react-router-dom";


const CommentsPage = () => {
    return (
        <div>
            <h2>Comments Page</h2>
            <ul>
                <li><Link to="jsonplaceholder">JSON Placeholder Comments</Link></li>
                <li><Link to="dummyjson">DummyJSON Comments</Link></li>
            </ul>


            <Outlet />

        </div>
    );
};

export default CommentsPage;