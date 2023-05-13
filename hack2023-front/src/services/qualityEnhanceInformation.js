import { API_URL } from '../utils/constants';
import axios from 'axios';

export const qualityEnhanceInformation = (img) =>
    axios({
        method: 'get',
        url: `${API_URL}/quality/enhance/information?imageUrl=${img}`,
    }).then((response) => {
        if (response.ok) {
            response.json();
        }
        throw response;
    });
