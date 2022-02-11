import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-container flex space-around'>
            <Link className='text-5xl text-slate-100 absolute left-5 top-3 hidden md:flex' to='/'>NHL Stats</Link>
            <MobileNavigation />
            <Navigation />
        </div>
    );
};

export default NavBar;
