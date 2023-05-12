import React from 'react';
import ReactDOM from 'react-dom/client';
import { PhotoInfoSection } from './components/photoInfoSection/photoInfoSection';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PhotoInfoSection
            src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Latin_letter_A_with_acute.svg/800px-Latin_letter_A_with_acute.svg.png'
            }
            alt={''}
        />
    </React.StrictMode>
);
