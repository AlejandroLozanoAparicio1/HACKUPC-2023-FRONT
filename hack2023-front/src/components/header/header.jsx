import logo from './../../assets/logoHomeScope.png';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={ logo } alt='logo'/>
            <div className={ styles.headerContents }>
                <p className={ styles.home } >Home</p>
                <p>Features</p>
                <p>About us</p>
                <p>Contact</p>
            </div>
        </div>
    );
};
