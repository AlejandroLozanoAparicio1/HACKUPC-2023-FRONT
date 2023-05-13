import { ImageCard } from '../imageCard/imageCard';
import styles from './imageGrid.module.scss';

export const ImageGrid = ({ title, images }) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.imageGrid}>
                {images.map((img, index) => {
                    return <ImageCard key={`img-card-${index}`} img={img} />;
                })}
            </div>
        </>
    );
};
