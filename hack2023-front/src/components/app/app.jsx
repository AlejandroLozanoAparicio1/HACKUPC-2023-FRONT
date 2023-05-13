import { useState, useMemo } from 'react';
import axios from 'axios';
import ImageUploader from '../imageUploader/imageUploader';
import { PhotoInfoSection } from '../photoInfoSection/photoInfoSection';
import { toBase64 } from '../../services/toBase64';
import { ImageUrlUploader } from '../imageUrlUploader/imageUrlUploader';

export const App = () => {
    const [image, setImage] = useState(null);

    const a = useMemo(() => {
        if (image) {
            try {
                //todo: url of the API
                const src = toBase64(image);
                //const response = axios.post('/api/upload-image', a);
            } catch (error) {
                console.log(error);
            }
        }
    }, [image]);

    return (
        <>
            <ImageUploader setImage={setImage} />
            <ImageUrlUploader setImage={setImage} />
            {image && <PhotoInfoSection src={image} alt={''} />}
        </>
    );
};
