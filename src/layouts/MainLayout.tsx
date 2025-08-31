import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            Main Layout
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;