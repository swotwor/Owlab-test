import style from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.listNavigation}>
                    <li className={style.navigationButton}>
                        <Link to={`/`}>Main</Link>
                    </li>
                    <li className={style.navigationButton}>
                        <Link to={`/news`}>News</Link>
                    </li>
                    <li className={style.navigationButton}>
                        <Link to={`/profile`}>Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
