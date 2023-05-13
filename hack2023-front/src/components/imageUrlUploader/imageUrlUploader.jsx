import Input from '../shared/Input/input';
import Button from '../shared/Button/button';
import { useState } from 'react';
import styles from './imageUrlUploader.module.scss';

export const ImageUrlUploader = ({ setImage }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.value);
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            return;
        }
        setImage(selectedFile);
    };

    return (
        <div className={styles.imageUrlUploader}>
            <input
                onChange={handleFileChange}
                value={selectedFile}
                type={'text'}
            />
            <Button
                type={'button'}
                label="Upload"
                onClick={handleFileUpload}
                disabled={!selectedFile || error != null}
            />
            {error && <p> {error} </p>}
        </div>
    );
};
