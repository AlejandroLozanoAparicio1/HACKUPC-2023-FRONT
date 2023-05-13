import { useState } from 'react';
import { PhotoInfoSection } from '../../components/photoInfoSection/photoInfoSection';
import { Header } from '../../components/header/header';
import styles from './improveImages.module.scss';
import { Uploaders } from '../../components/uploaders/uploaders';
import { LandingPage } from '../../components/landingPage/landingPage';
import { ImageGrid } from '../../components/imageGrid/imageGrid';

export const ImproveImages = () => {
    const [image, setImage] = useState(null);
    const [imageInfo, setImageInfo] = useState();
    const [enhanced, setEnhanced] = useState(false);

    const handleEnhancedOnChange = (e) => {
        setEnhanced(e.target.checked);
    };

    return (
        <div>
            <Header />
            <LandingPage
                title={'Improve images'}
                titleClass={styles.alignLeft}
                description={'Descripcion'}
            />

            <Uploaders setImage={setImage} setImageInfo={setImageInfo} />
            {imageInfo && (
                <>
                    <PhotoInfoSection
                        handleOnChange={handleEnhancedOnChange}
                        imageInfo={imageInfo}
                        src={image}
                        alt={''}
                        enhanced={enhanced}
                    />
                    <ImageGrid
                        title={'References'}
                        images={imageInfo.data.similiarImages}
                    />
                </>
            )}
        </div>
    );
};
