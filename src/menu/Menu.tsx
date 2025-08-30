import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <div>
           <ul>

               <li><Link to="users">Users dummyjson</Link></li>
               <li><Link to="posts">Posts dummyjson</Link></li>
           </ul>
        </div>
    );
};

export default Menu;