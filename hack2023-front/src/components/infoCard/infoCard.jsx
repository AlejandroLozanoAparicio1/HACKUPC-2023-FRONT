import styles from './infoCard.module.scss';
import { Switch } from '../shared/Switch/switch';

const InfoCard = ({ roomType, features, score, caption, handleOnChange }) => {
    return (
        <div className={styles.infoCard}>
            <h2 className={styles.title}>{roomType}</h2>
            <p className={styles.caption}>{caption}</p>
            <ul className={styles.features}>
                {features.map((feature, index) => (
                    <li className={styles.feature} key={index}>
                        {feature.label
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
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
