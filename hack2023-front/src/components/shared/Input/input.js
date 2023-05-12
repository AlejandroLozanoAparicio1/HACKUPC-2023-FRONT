import styles from './input.module.scss';

const Input = ({ onChange, type }) => {
    return <input type={type} className={styles.button} onChange={onChange} />;
};

export default Input;
