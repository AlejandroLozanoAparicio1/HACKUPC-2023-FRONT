import { Link } from 'react-router-dom';
import logo from './../../assets/logoHomeScope.png';
import styles from './header.module.scss';
import './header.css';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();
    console.log(location);
    
    return (
        <div className={styles.header}>
            <img src={ logo } alt='logo'/>
            <div className={ styles.headerContents }>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/improve-images">Improve Images</NavLink>
                <NavLink activeClassName="active" to="/calculate-pricing">Calculate pricing</NavLink>
                <NavLink activeClassName="active" to="/about">About us</NavLink>
            </div>
        </div>
    );
};
