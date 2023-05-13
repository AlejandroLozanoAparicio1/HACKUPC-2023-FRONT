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
                roomType={ imageInfo.data.room_type_prediction.label }
                features={imageInfo.data.detections}
                score={ imageInfo.data.enhancingDetails.baseScoreImage }
                caption={ imageInfo.data.caption.description }
                handleOnChange={handleOnChange}
            />
        </div>
    );
};
