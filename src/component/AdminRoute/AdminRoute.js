import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import Loading from '../Loading/Loading';

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (user.email !== 'admin@gmail.com') {
        return <Navigate to="/404" ></Navigate>
    }
    return children;
};

export default AdminRoute;