import { useState, useEffect } from 'react';
//import axios from 'axios';
import ImageUploader from '../imageUploader/imageUploader';
import { PhotoInfoSection } from '../photoInfoSection/photoInfoSection';
import { toBase64 } from '../../services/toBase64';
import { ImageUrlUploader } from '../imageUrlUploader/imageUrlUploader';
import { LandingPage } from '../landingPage/landingPage';
import { Header } from '../header/header';
import styles from './app.module.scss';

export const App = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (image) {
            try {
                console.log(image);
                const src = toBase64(image);
                console.log(src);
                //todo: url of the API
                //const response = axios.post('/api/upload-image', a);
            } catch (error) {
                console.log(error);
            }
        }
    }, [image]);

    return (
        <div className={styles.app}>
            <Header />
            <LandingPage />
            <ImageUploader setImage={setImage} />
            {image && <PhotoInfoSection src={image} alt={''} />}
        </div>
    );
};
