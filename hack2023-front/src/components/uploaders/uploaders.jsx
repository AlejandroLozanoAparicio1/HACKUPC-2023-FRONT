import ImageUploader from '../imageUploader/imageUploader';
import styles from './uploaders.module.scss';
import { ImageUrlUploader } from '../imageUrlUploader/imageUrlUploader';
import { useState } from 'react';
import Button from '../shared/Button/button';

export const Uploaders = ({ setImage }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState('');
    const [error, setError] = useState(null);

    const handleFileUpload = async () => {
        if (selectedFile) {
            setImage(selectedFile);
        }
        if (selectedUrl) {
            setImage(selectedUrl);
        }
    };

    return (
        <div className={styles.uploadersContainer}>
            <div className={styles.uploaders}>
                <ImageUploader
                    setSelectedFile={setSelectedFile}
                    setError={setError}
                />
                <p>or</p>
                <ImageUrlUploader
                    selectedUrl={selectedUrl}
                    setSelectedUrl={setSelectedUrl}
                />
            </div>
            <div className={styles.uploadBtn}>
                <Button
                    type={'button'}
                    label="Upload"
                    onClick={handleFileUpload}
                    disabled={(!selectedFile && !selectedUrl) || error}
                />
            </div>
            {error && <p> {error} </p>}
        </div>
    );
};
