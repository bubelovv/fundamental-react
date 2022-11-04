import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter,} from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoadingApp, setIsLoadingApp] = useState(true);

    useEffect(() => {
        setIsAuth(localStorage.getItem('auth'));
        setIsLoadingApp(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoadingApp,
            setIsLoadingApp,
        }}>
            <BrowserRouter>
                <Navbar/>
                <div className='app-content'>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
