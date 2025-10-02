import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/">Hem</Link>
                <Link to="/favorites">Favoriter</Link>
                <Link to="/tutorial">Tutorial</Link>
            </nav>
        </header>
    );
};

export default Header