import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <ul>
          Menu
            <li><Link to={'/users'}>Users</Link></li>

        </ul>
    );
};

export default Menu;