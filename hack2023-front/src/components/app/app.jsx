import { useState, useEffect } from 'react';
import { PhotoInfoSection } from '../photoInfoSection/photoInfoSection';
import { LandingPage } from '../landingPage/landingPage';
import { Header } from '../header/header';
import styles from './app.module.scss';
import { Uploaders } from '../uploaders/uploaders';
import { qualityEnhanceInformation } from '../../services/qualityEnhanceInformation';

export const App = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const f = async () => {
            if (image) {
                try {
                    console.log(await qualityEnhanceInformation(image));
                } catch (error) {
                    console.log(error);
                }
            }
        };
        f();
    }, [image]);

    return (
        <div className={styles.app}>
            <Header />
            <LandingPage />
            <Uploaders setImage={setImage} />

            {image && <PhotoInfoSection src={image} alt={''} />}
        </div>
    );
};
