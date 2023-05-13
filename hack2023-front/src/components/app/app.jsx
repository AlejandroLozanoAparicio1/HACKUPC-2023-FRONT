import { useState } from 'react';
import { PhotoInfoSection } from '../photoInfoSection/photoInfoSection';
import { LandingPage } from '../landingPage/landingPage';
import { Header } from '../header/header';
import styles from './app.module.scss';
import { Uploaders } from '../uploaders/uploaders';

export const App = () => {
    const [image, setImage] = useState(null);
    const [imageInfo, setImageInfo] = useState();
    const [enhanced, setEnhanced] = useState(false);

    const handleEnhancedOnChange = (e) => {
        setEnhanced(e.target.checked);
    };

    return (
        <div className={styles.app}>
            <Header />
            <LandingPage />
            <Uploaders setImage={setImage} setImageInfo={setImageInfo} />
            {imageInfo && (
                <PhotoInfoSection
                    handleOnChange={handleEnhancedOnChange}
                    imageInfo={imageInfo}
                    src={image}
                    alt={''}
                    enhanced={enhanced}
                />
            )}
        </div>
    );
};
