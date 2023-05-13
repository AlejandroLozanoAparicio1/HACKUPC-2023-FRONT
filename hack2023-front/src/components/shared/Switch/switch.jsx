import styles from './switch.module.scss';

export const Switch = ({ handleOnChange }) => {
    return (
        <label className={styles.switch}>
            <input onChange={handleOnChange} type="checkbox" />
            <span className={styles.roundSlider}></span>
        </label>
    );
};
