import { ImageCard } from '../imageCard/imageCard';
import styles from './imageGrid.module.scss';

export const ImageGrid = ({ title, images }) => {
    return (
        <div className={styles.imageGrid}>
            <h2 className={styles.title}>{title}</h2>
            {images.map((img, index) => {
                return <ImageCard key={`img-card-${index}`} img={img} />;
            })}
        </div>
    );
};
