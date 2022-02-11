import React from 'react';
import NavLinks from './NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const MobileNavigation = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const closeHamburger = () => setHamburgerOpen(false);

    return (
        <nav className='md:hidden mobile-nav'>
            <GiHamburgerMenu className='hamburger'
                size='40px' color='rgb(241, 245, 249)'
                onClick={() => setHamburgerOpen(!hamburgerOpen)} />
            {hamburgerOpen && <NavLinks isMobile={true} closeHamburger={closeHamburger} />}
            <h1 className='text-5xl text-slate-100 text-center'>NHL Stats</h1>
        </nav>
    );
};

export default MobileNavigation;
