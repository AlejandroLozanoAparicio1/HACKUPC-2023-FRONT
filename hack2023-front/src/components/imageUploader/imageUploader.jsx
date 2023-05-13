import styles from './imageUploader.module.scss';
import Input from '../shared/Input/input';

const ImageUploader = ({ setSelectedFile, setError }) => {
    const fileReader = new FileReader();

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file.');
        } else {
            fileReader.addEventListener(
                'load',
                function () {
                    setSelectedFile(fileReader.result);
                },
                false
            );

            fileReader.readAsDataURL(file);

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
