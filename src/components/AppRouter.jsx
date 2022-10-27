import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/router';
import {AuthContext} from '../context';
import Loader from '../UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoadingApp} = useContext(AuthContext);

    if(isLoadingApp) return <Loader/>

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate to="/error"/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}/>
                )}
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
    );
};

export default AppRouter;