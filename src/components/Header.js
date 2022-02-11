import Nav from './Nav';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-slate-900 p-3 text-center md:text-left">
			<div className='hamburger absolute top-5 left-3 md:hidden'>
				<Hamburger />
			</div>
            <Link to='/' className="text-5xl font-medium text-slate-100">NHL Stats</Link>
            <Nav />
        </header>
    );
};

export default Header;
