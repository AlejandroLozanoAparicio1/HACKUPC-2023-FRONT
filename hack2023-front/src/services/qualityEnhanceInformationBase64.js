import { API_URL } from '../utils/constants';
import axios from 'axios';

export const qualityEnhanceInformationBase64 = async (img) => {
    const call = await axios.get(
        `${API_URL}/quality/enhance/informationBase64?imageUrl=${img}`
    );

    return call;
};
