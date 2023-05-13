import styles from './imageCard.module.scss';

export const ImageCard = ({ img }) => {
    return (
        <div className={styles.imageCard}>
            <img className={styles.image} src={img} alt="" />
        </div>
    );
};
