import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";
import '../components/menu/menu.css'



const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;