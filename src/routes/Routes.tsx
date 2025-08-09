import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Jsonplaceholder from "../pages/Jsonplaceholder";
import Dummyjson from "../pages/Dummyjson";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>,children: [
                {path: 'jsonplaceholder', element: <Jsonplaceholder/>},
                {path: 'dummyjson', element: <Dummyjson/>},
                ]},
            {path: 'posts', element: <PostsPage/>,children: [
                {path: 'jsonplaceholder', element: <Jsonplaceholder/>},
                {path: 'dummyjson', element: <Dummyjson/>},
                ]},
            {path: 'comments', element: <CommentsPage/>,children: [
                {path: 'jsonplaceholder', element: <Jsonplaceholder/>}
                ]},

        ]}

])