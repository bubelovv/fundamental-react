import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='navbar__link' to="/posts">Posts</Link>
            <Link className='navbar__link' to="/about">About</Link>
        </div>
    );
};

export default Navbar;