import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Sections/Home/Home";

import Register from "../Sections/Authentication/Register/Register";
import LogIn from "../Sections/Authentication/LogIn/Login";
import Error from "../Error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/login",
                element: <LogIn></LogIn>,

            },
            {
                path: "/register",
                element: <Register></Register>,

            },
        ]

    },
]);