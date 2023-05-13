import Button from '../shared/Button/button';
import ImageUploader from '../imageUploader/imageUploader';
import { ImageUrlUploader } from '../imageUrlUploader/imageUrlUploader';
import { qualityEnhanceInformation } from '../../services/qualityEnhanceInformation';
import { qualityEnhanceInformationBase64 } from '../../services/qualityEnhanceInformationBase64';
import { useState } from 'react';
import styles from './uploaders.module.scss';

export const Uploaders = ({ setImage, setImageInfo }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState('');
    const [error, setError] = useState(null);

    const handleFileUpload = async () => {
        if (selectedFile) {
            setImage(selectedFile);
            try {
                setImageInfo(
                    await qualityEnhanceInformationBase64(selectedFile)
                );
            } catch (error) {
                console.log(error);
            }
        }
        if (selectedUrl) {
            setImage(selectedUrl);
            try {
                setImageInfo(await qualityEnhanceInformation(selectedUrl));
            } catch (error) {
                console.log(error);
            }
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
