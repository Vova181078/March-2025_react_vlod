import { Link } from "react-router-dom"


const Menu = () => {
    return (
        <div>
            <ul>

                <li><Link to="/users/jsonplaceholder">Users-jsonplaceholder</Link></li>
                <li><Link to="/users/dummyjson">Users-dummyjson</Link></li>


                <li><Link to="/posts/jsonplaceholder">Posts-jsonplaceholder</Link></li>
                <li><Link to="/posts/dummyjson">Posts-dummyjson</Link></li>


                <li><Link to="/comments/jsonplaceholder">Comments-jsonplaceholder</Link></li>

            </ul>

        </div>
    );
};

export default Menu;