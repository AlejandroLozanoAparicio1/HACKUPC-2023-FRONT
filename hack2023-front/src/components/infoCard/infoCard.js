import styles from './infoCard.module.scss';

const InfoCard = ({ roomType, features, score, caption }) => {
    return (
        <div className={styles.infoCard}>
            <h2 className={styles.title}>{roomType}</h2>
            <p className={styles.caption}>{caption}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <p className={styles.score}>Score: {score}</p>
        </div>
    );
};

export default InfoCard;
