import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import LoginLayout from "./LoginLayout";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/LogIn/Register";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <LogIn></LogIn>
            }
        ]
    },
    {
        path: '/register',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])