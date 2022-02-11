import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul className='hidden md:inline-flex absolute right-10 top-5 flex text-2xl'>
				<li className=''>
					<Link className='text-slate-100 hover:text-slate-300 mx-5' to='/'>Scores</Link>
				</li>
				<li className=''>
					<Link className='text-slate-100 hover:text-slate-300 mx-5' to='stats'>Stats</Link>
				</li>
				<li className=''>
					<Link className='text-slate-100 hover:text-slate-300 mx-5' to='standings'>Standings</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
