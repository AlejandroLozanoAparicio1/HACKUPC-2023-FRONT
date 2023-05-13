import styles from './landingPage.module.scss';

export const LandingPage = ({ title, titleClass, description}) => {
    return (
        <div className={ styles.landingPage }>
            <h1 className={ titleClass }>{ title }</h1>
            <p>{ description}</p>
        </div>
    );
};
