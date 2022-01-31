import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='float-right flex text-2xl'>
        <li className='mr-6'>
            <Link className='text-slate-100 hover:text-slate-300' to='/'>Scores</Link>
        </li>
        <li className='mr-6'>
            <Link className='text-slate-100 hover:text-slate-300' to='stats'>Stats</Link>
        </li>
    </ul>
  )
}

export default Nav;
