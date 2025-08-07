import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CommentPage from "../pages/comments-page/CommentPage";
import PostPage from "../pages/posts-page/PostPage";
import ProductPage from "../pages/products-page/ProductPage";
import UserPage from "../pages/users-page/UserPage";



export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>,children: [
            {path: '/users', element: <UserPage/>},
            {path: '/posts', element: <PostPage/>},
            {path: '/comments', element: <CommentPage/>},
            {path: '/products', element: <ProductPage/>},

        ]},
])


