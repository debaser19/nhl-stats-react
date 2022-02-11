import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
    return (
        <ul>
            <li>
                <Link onClick={() => props.isMobile && props.closeHamburger()} to='/'>Scores</Link>
            </li>
            <li>
                <Link onClick={() => props.isMobile && props.closeHamburger()} to='stats'>Stats</Link>
            </li>
            <li>
                <Link onClick={() => props.isMobile && props.closeHamburger()} to='standings'>Standings</Link>
            </li>
        </ul>
    );
};

export default NavLinks;
