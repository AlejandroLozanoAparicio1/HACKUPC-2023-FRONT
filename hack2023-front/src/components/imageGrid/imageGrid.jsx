import { ImageCard } from '../imageCard/imageCard';
import styles from './imageGrid.module.scss';

export const ImageGrid = ({ images }) => {
    return (
        <div className={styles.imageGrid}>
            {images.map((img, index) => {
                return <ImageCard key={`img-card-${index}`} img={img} />;
            })}
        </div>
    );
};
