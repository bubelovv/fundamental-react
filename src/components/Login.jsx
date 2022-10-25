import React, {useContext} from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import {AuthContext} from '../context';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        navigate('/about/')
    };

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Login form</h1>
            <form>
                <MyInput type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton onClick={login}>login</MyButton>
            </form>
        </div>
    );
};

export default Login;