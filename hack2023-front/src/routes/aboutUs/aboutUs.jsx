import { LandingPage } from '../../components/landingPage/landingPage';
import { Header } from '../../components/header/header';
import { MemberCard } from '../../components/memberCard/memberCard';
import izan from '../../assets/spidy.JPG';
import alex from '../../assets/boxAlex.jpeg';
import david from '../../assets/david.jpeg';
import uri from '../../assets/gatoUri.jpeg';
import styles from './aboutUs.module.scss';

export const AboutUs = () => {
    return (
        <div className={styles.aboutUsContainer}>
            <Header />
            <LandingPage
                title={'About us'}
                titleClass={styles.alignLeft}
                description={
                    "We are a group of passionate Computer Science students from the Faculty of Informatics at the Universitat Politècnica de Catalunya in Barcelona. We share a common goal: to develop innovative software solutions that solve real-world problems and improve people's lives. Thank you for visiting our website and for your interest in our work."
                }
            />

            <div className={styles.memberCardsContainer}>
                <MemberCard
                    name={'Izan Cordobilla'}
                    image={izan}
                    job={'Fullstack Developer'}
                    country={'Barcelona, Spain'}
                    age={'22 years old'}
                />
                <MemberCard
                    name={'Alex Lozano'}
                    image={alex}
                    job={'Frontend Developer'}
                    country={'Barcelona, Spain'}
                    age={'22 years old'}
                />
                <MemberCard
                    name={'Oriol Portell'}
                    image={uri}
                    job={'Backend Developer'}
                    country={'Barcelona, Spain'}
                    age={'22 years old'}
                />
                <MemberCard
                    name={'David Valls'}
                    image={david}
                    job={'Backend Developer'}
                    country={'Barcelona, Spain'}
                    age={'21 years old'}
                />
            </div>
        </div>
    );
};
