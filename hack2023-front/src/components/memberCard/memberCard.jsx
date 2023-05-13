import styles from './memberCard.module.scss';

export const MemberCard = ({ name, image, job, country, age }) => {  
    return (
        <div className={ styles.memberCardContainer }>
            <img src={ image } alt={`${name} profile`} />
            <h2>{ name }</h2>
            <p className={ styles.job }>{ job }</p>
            <p>{ country }</p>
            <p>{ age }</p>
        </div>
    );
};
