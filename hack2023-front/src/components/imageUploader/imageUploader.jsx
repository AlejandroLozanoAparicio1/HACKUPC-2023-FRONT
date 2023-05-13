import styles from './imageUploader.module.scss';
import Input from '../shared/Input/input';

const ImageUploader = ({ setSelectedFile, setError }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        //formatting TODO

        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file.');
        } else {
            setSelectedFile(file);
            setError(null);
        }
    };

    return (
        <div className={styles.imageUploader}>
            <Input onChange={handleFileChange} type={'file'} />
        </div>
    );
};

export default ImageUploader;
