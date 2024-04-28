import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Sections/Home/Home";

import Register from "../Sections/Authentication/Register/Register";
import LogIn from "../Sections/Authentication/LogIn/Login";
import Error from "../Error/Error";
import AddArt from "../Sections/AddArt/AddArt";
import PrivetRoute from "./PrivetRoute";
import AllArt from "../Sections/Home/AllArt/AllArt";
import Details from "../Sections/Home/Details/Details";
import MyList from "../Sections/Home/MyList/MyList";
import Update from "../Sections/UpdateArt/Update";

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
            {
                path: "/addArt",
                element: <PrivetRoute>
                    <AddArt></AddArt>
                </PrivetRoute> ,

            },
            {
                path: "/allArt",
                element: <PrivetRoute>
                    <AllArt></AllArt>
                </PrivetRoute> ,

            },
            {
                path: "/details/:id",
                element: <PrivetRoute>
                    <Details></Details>
                </PrivetRoute>,
                loader: ({params}) =>{ return fetch(`http://localhost:5000/details/${params.id}`)}

            },
            {
                path: "/myArt/:email",
                element: <PrivetRoute>
                    <MyList></MyList>
                </PrivetRoute>,
                loader: ({ params }) => () => { return fetch(`http://localhost:5000/myArt/${params.email}`) }

            },
            {
                path: "/update/:id",
                element: <PrivetRoute>
                    <Update></Update>
                </PrivetRoute>,
                loader: ({ params }) => () => { return fetch(`http://localhost:5000/update/${params.id}`) }

            },
        ]

    },
]);