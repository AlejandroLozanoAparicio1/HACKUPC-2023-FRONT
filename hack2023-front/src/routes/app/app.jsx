import { LandingPage } from '../../components/landingPage/landingPage';
import { Header } from '../../components/header/header';
import styles from './app.module.scss';

export const App = () => {

    return (
        <div className={styles.app}>
            <Header />
            <LandingPage />
        </div>
    );
};
