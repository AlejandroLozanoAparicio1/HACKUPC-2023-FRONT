import styles from './infoCard.module.scss';
import { Switch } from '../shared/Switch/switch';

const InfoCard = ({ roomType, features, score, caption, handleOnChange }) => {
    const decideColor = () => {
        if(score < 4.0) return styles.redScore;
        else if(score >= 4.0 && score <7.0) return styles.orangeScore;
        else return styles.greenScore;
    }
    
    return (
        <div className={styles.infoCard}>
            <div className={styles.descriptionContainer}>
                <h2 className={styles.title}>{ roomType.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()) }</h2>
                <p className={styles.caption}>{ caption.replace(/\b\w/, l => l.toUpperCase()) }</p>
                <p className={styles.featuresTitle}>
                    Features
                </p>
                <ul>
                    {features.map((feature, index) => (
                        <li className={styles.feature} key={index}>
                            {feature.label.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={ styles.scoreAndButtonContainer }>
                <div className={ styles.scoreContainer }>
                    <p className={styles.score}>
                        Your image's score is: 
                    </p>
                    <span className={decideColor()}> {score.toFixed(2)} </span>
                </div>
                
                
                <div className={ styles.enhanceContainer }>
                    <p>ENHANCE!</p>
                    <Switch handleOnChange={handleOnChange} />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
