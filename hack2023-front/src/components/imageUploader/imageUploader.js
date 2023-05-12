import { useState } from 'react';
import axios from 'axios';
import styles from './imageUploader.module.scss';
import Button from '../shared/Button/button';
import Input from '../shared/Input/input';

const ImageUploader = () => {
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

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            //todo: url of the API
            const response = await axios.post('/api/upload-image', formData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
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
