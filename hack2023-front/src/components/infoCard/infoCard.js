import styles from './infoCard.module.scss';
import { Switch } from '../shared/Switch/switch';

const InfoCard = ({ roomType, features, score, caption, handleOnChange }) => {
    return (
        <div className={styles.infoCard}>
            <h2 className={styles.title}>{roomType}</h2>
            <p className={styles.caption}>{caption}</p>
            <p className={styles.featuresTitle}>
                The foto includes the following:
            </p>
            <ul>
                {features.map((feature, index) => (
                    <li className={styles.feature} key={index}>
                        {feature.label}
                    </li>
                ))}
            </ul>
            <p className={styles.score}>
                The photo's score is <span>{score.toFixed(2)}</span>
            </p>
            <Switch handleOnChange={handleOnChange} />
        </div>
    );
};

export default InfoCard;
