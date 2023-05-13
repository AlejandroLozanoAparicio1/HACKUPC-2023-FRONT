import { API_URL } from '../utils/constants';
import axios from 'axios';

export const qualityEnhanceInformation = async (img) => {
    const call = await axios.get(
        `${API_URL}/quality/enhance/information?imageUrl=${img}`
    );
    return call;
};
