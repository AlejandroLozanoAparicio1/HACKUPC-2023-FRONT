import logo from './../../assets/logoHomeScope.png';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={ logo } alt='logo'/>
        </div>
    );
};
