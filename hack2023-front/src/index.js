import React from 'react';
import ReactDOM from 'react-dom/client';
import { PhotoInfoSection } from './components/photoInfoSection/photoInfoSection';
import './index.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PhotoInfoSection
            src={
                'https://plus.unsplash.com/premium_photo-1682377521566-f70ac8abe597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
            alt={''}
        />
    </React.StrictMode>
);
