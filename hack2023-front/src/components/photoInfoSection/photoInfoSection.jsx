import InfoCard from '../infoCard/infoCard';
import styles from './photoInfoSection.module.scss';

export const PhotoInfoSection = ({
    handleOnChange,
    imageInfo,
    src,
    alt,
    enhanced,
}) => {
    console.log(imageInfo.data);
    return (
        <div className={styles.container}>
            <img className={styles.image} src={src} alt={alt} />
            <InfoCard
                roomType={'Living Room'}
                features={imageInfo.data.detections}
                score={3.32321321}
                caption={'Officia culpa incididunt consectetur eiusmod ad nisi. Laborum quis ut consectetur ut quis consectetur est et. Sunt nulla consectetur laboris '}
                handleOnChange={handleOnChange}
            />
        </div>
    );
};
