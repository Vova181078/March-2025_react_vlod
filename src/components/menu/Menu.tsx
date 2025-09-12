import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <div>
          menu
            <ul>
                <li><Link to={'cars'}>cars</Link></li>
                <li><Link to={'cars/create'}>create</Link></li>
            </ul>

        </div>
    );
};

export default Menu;