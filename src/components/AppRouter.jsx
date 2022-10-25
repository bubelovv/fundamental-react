import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privatRoutes, publicRoutes} from '../router/router';
import {AuthContext} from '../context';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth
            ? <Routes>
                {privatRoutes.map((route, idx) =>
                    <Route key={idx} path={route.path} element={route.element}/>
                )}
                <Route path="*" element={<Navigate to="/error"/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map((route, idx) =>
                    <Route key={idx} path={route.path} element={route.element}/>
                )}
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
    );
};

export default AppRouter;