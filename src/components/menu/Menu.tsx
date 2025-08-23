import { Link } from "react-router-dom"


const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/users">users page</Link></li>
                <li><Link to="/users/jsonplaceholder">users json page</Link></li>
                <li><Link to="/users/dummyjson">users dummy page</Link></li>

                <li><Link to="/posts">posts page</Link></li>
                <li><Link to="/posts/jsonplaceholder">posts json page</Link></li>
                <li><Link to="/posts/dummyjson">posts dummy page</Link></li>

                <li><Link to="/comments">comments json page</Link></li>
                <li><Link to="comments/jsonplaceholder">comments json page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;