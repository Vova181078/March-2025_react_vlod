import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserLoginPage from "../pages/UserLoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";

export const routes = createBrowserRouter([
    {path:'/',element: <MainLayout/>,children:[
            {index: true, element: <HomePage/>},
            {path: 'login', element: <UserLoginPage/>},
            {path: '/auth/resources', element: <AuthResourcesPage/>}
        ]}
])