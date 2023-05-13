import { LandingPage } from '../../components/landingPage/landingPage';
import { Header } from '../../components/header/header';
import styles from './app.module.scss';

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <LandingPage
                title={'HomeScope'}
                titleClass={styles.titleClass}
                description={
                    "Introducing HomeLens, the innovative photo improvement and analysis app for homeowners. Simply upload a photo of your house, and watch as HomeLens enhances its quality, bringing out the best in your home. Plus, receive valuable information and insights about your property, including its estimated value and other important details. With HomeLens, you'll see your home in a whole new way, and gain a better understanding of its potential. Try HomeLens today and take the first step towards unlocking your home's full potential."
                }
            />
        </div>
    );
};
