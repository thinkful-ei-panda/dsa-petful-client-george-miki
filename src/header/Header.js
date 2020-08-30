import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='wrapper'>
            <Link to={'/'}><h1>Petsy.</h1></Link>
        </header>
    );
};

export default Header;

