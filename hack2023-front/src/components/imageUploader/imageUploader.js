import { useState } from 'react';
import styles from './imageUploader.module.scss';
import Button from '../shared/Button/button';
import Input from '../shared/Input/input';

const ImageUploader = ({ setImage }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file.');
        } else {
            setSelectedFile(file);
            setError(null);
        }
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            return;
        }
        setImage(selectedFile);
    };

    return (
        <div className={styles.imageUploader}>
            <Input onChange={handleFileChange} type={'file'} />
            {selectedFile && (
                <Button
                    type={'button'}
                    label="Upload"
                    onClick={handleFileUpload}
                    disabled={!selectedFile || error != null}
                />
            )}
            {error && <p> {error} </p>}
        </div>
    );
};

export default ImageUploader;
