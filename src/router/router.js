import React from 'react';
import PostPage from '../components/PostPage';
import Posts from '../pages/Posts';
import About from '../pages/About';
import Error from '../pages/Error';
import Login from '../components/Login';

export const privatRoutes = [
    {path: '/posts/:id', element: <PostPage/>},
    {path: '/posts', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '/error', element: <Error/>},
];

export const publicRoutes = [
    {path: '/login', element: <Login/>},
];