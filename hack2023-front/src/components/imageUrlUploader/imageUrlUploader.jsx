import styles from './imageUrlUploader.module.scss';

export const ImageUrlUploader = ({ selectedUrl, setSelectedUrl }) => {
    const handleFileChange = (event) => {
        setSelectedUrl(event.target.value);
    };

    return (
        <div className={styles.imageUrlUploader}>
            <input
                onChange={handleFileChange}
                value={selectedUrl}
                type={'text'}
            />
        </div>
    );
};
