import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>User Page</Link></li>
                <li><Link to={'posts'}>Post Page</Link></li>
                <li><Link to={'comments'}>Comment Page</Link></li>
                <li><Link to={'products'}>Product Page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;