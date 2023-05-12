import styles from './button.module.scss';

const Button = ({ label, onClick, disabled, type }) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={styles.button}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
