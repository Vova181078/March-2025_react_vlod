
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/users-pages/UsersPage.tsx";
import PostsPage from "../pages/posts-pages/PostsPage.tsx";
import CommentsPage from "../pages/comments-pages/CommentsPage.tsx";
import UsersJsonPage from "../pages/users-pages/UsersJsonPage.tsx";
import UsersDummyPage from "../pages/users-pages/UsersDummyPage.tsx";
import PostsDummyPage from "../pages/posts-pages/PostsDummyPage.tsx";
import CommentsJsonPage from "../pages/comments-pages/CommentsJsonPage.tsx";

export const router = createBrowserRouter([
    { path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>, children:[
                    {path: 'jsonplacelolder', element: <UsersJsonPage/>},
                    {path: 'dummyjson', element: <UsersDummyPage/>},
                ]
         },
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplacelolder', element: <UsersJsonPage/>},
                    {path: 'dummyjson', element: <PostsDummyPage/>},
                ]
            },
            {path: 'comments', element: <CommentsPage/>, children:[
                    {path: 'jsonplacelolder', element: <CommentsJsonPage/>},
                ]
            },

]
    }
    ])