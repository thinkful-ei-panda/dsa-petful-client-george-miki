import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header-group wrapper'>
            <Link to={'/'}><h1>Petsy.</h1></Link>
            <nav className='nav-group'>
                <ul className='nav-links-list'>
                    <li className='nav-link'><Link to={'/adoptionlistpage'}>Adoption List</Link></li>
                    <li className='nav-link'><Link to={'/adoptionpage'}>Adoption Page</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

