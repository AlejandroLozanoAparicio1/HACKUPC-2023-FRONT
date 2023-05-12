import InfoCard from '../infoCard/infoCard';
import styles from './photoInfoSection.module.scss';

export const PhotoInfoSection = ({ src, alt }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={src} alt={alt} />
            <InfoCard
                roomType={'Cocina'}
                features={['sofa', 'mesa', 'tv']}
                score={3.32321321}
                caption={'caption'}
            />
        </div>
    );
};
