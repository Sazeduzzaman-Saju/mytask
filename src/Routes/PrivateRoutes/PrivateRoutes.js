import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import PropagateLoader from "react-spinners/PropagateLoader";
import { PuffLoader } from 'react-spinners';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className='mx-w-full-xl mx-auto'>
                <div class="grid grid-cols-1 place-items-center">
                    <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <PuffLoader color={'#000'} loading={loading} size={150} />
                    </div>
                </div>
            </div>
        </>;
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoutes;