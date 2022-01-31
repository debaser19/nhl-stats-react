import Nav from './Nav';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-slate-900 px-10">
            <Link to='/' className="text-5xl font-medium text-slate-100 inline">NHL Stats</Link>
            <Nav />
        </header>
    )
}

export default Header;
