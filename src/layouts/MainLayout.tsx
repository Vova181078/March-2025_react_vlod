import {Outlet} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";


const MainLayout = () => {
    return (
        <div>
            <UsersPage/>
            <PostsPage/>
            <CommentsPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;