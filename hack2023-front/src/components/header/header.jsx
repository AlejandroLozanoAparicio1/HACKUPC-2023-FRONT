import logo from './../../assets/logoHomeScope.png';
import styles from './header.module.scss';
import './header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="logo" />
            <div className={styles.headerContents}>
                <NavLink exact activeClassName="active" to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/improve-images">
                    Improve Images
                </NavLink>
                <NavLink activeClassName="active" to="/about-us">
                    About us
                </NavLink>
            </div>
        </div>
    );
};
