import { API_URL } from '../utils/constants';
import axios from 'axios';

//const axios = require('axios/dist/node/axios.cjs');

export const qualityEnhanceInformation = (img) =>
    axios({
        method: 'get',
        url: `${API_URL}/quality/enhance/information?imageUrl=${img}`,
        // responseType: 'stream',
    }).then((response) => {
        if (response.ok) {
            response.json();
        }
        throw response;
    });
