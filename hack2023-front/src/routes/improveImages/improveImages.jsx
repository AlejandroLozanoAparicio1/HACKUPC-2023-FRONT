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
                description={"Our Improve Images page is the heart of our application. Here, you can easily upload photos of your house and watch as our powerful image enhancement algorithms work their magic. Our advanced technology brings out the best in your photos, making them sharper, clearer, and more vibrant than ever before. Plus, once your images have been enhanced, you'll receive valuable information about your home, including its estimated value and other important details. With our Improve Images page, you can finally showcase your home in its best light, and gain a deeper understanding of its true potential. Try it today and see the difference for yourself."}
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
