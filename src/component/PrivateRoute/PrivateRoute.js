import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className=' flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;