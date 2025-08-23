
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/users-pages/UsersPage.tsx";
import CommentsPage from "../pages/comments-pages/CommentsPage.tsx";
import UsersJson from "../components/users-components/UsersJson.tsx";
import UsersDummy from "../components/users-components/UsersDummy.tsx";
import PostsJson from "../components/posts-components/PostsJson.tsx";
import PostsDummy from "../components/posts-components/PostsDummy.tsx";
import PostsJsonPage from "../pages/posts-pages/PostsJsonPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>,children: [
                    {path: 'jsonplaceholder', element: <UsersJson/>},
                    {path: 'dummyjson', element: <UsersDummy/>}
                ]},
            {path: 'posts', element: <PostsJsonPage/>,children: [
                    {path: 'jsonplaceholder', element: <PostsJson/>},
                    {path: 'dummyjson', element: <PostsDummy/>}
                ]},

            {path: 'comments', element: <CommentsPage/>,children: [
                    {path: 'jsonplaceholder', element: <CommentsPage/>}
                ]}

        ]},
])
