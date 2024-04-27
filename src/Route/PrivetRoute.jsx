/* eslint-disable react/prop-types */
import { useContext } from "react";

import { useLocation, Navigate } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    const form = location?.pathname || '/'
    if (loading) {
        return <div className="w-full items-center text-center">
            <Spinner className="h-16 w-16 text-gray-900/50 text-center" />
        </div>
    }
    if (!user) {
        return <Navigate to={'/login'} state={form}></Navigate>


    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;