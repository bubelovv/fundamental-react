import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import MyButton from '../MyButton/MyButton';
import {AuthContext} from '../../context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
    }

    return (
        <div className='navbar'>
            <Link className='navbar__link' to="/posts">Posts</Link>
            <Link className='navbar__link' to="/about">About</Link>
            {isAuth && <MyButton style={{position: 'absolute', right: 10}} onClick={logout}>logout</MyButton>}
        </div>
    );
};

export default Navbar;