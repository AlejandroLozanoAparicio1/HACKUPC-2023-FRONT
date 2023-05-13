import InfoCard from '../infoCard/infoCard';
import styles from './photoInfoSection.module.scss';

export const PhotoInfoSection = ({
    handleOnChange,
    imageInfo,
    src,
    alt,
    enhanced,
}) => {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={
                    enhanced
                        ? imageInfo.data.enhancingDetails.enhancedImage
                        : src
                }
                alt={alt}
            />
            <InfoCard
                roomType={imageInfo.data.room_type_prediction.label}
                features={imageInfo.data.detections}
                score={
                    enhanced
                        ? imageInfo.data.enhancingDetails.enhancedScoreImage
                        : imageInfo.data.enhancingDetails.baseScoreImage
                }
                caption={imageInfo.data.caption.description}
                handleOnChange={handleOnChange}
            />
        </div>
    );
};
