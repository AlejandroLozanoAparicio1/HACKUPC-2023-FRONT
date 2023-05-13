import ImageUploader from '../imageUploader/imageUploader';
import styles from './uploaders.module.scss';

export const Uploaders = () => {
    return (
    <div className={ styles.uploaders }>
        <ImageUploader setImage={setImage} />
        <p>or</p>
        <ImageUrlUploader setImage={setImage}></ImageUrlUploader>
    </div>)
}