import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import { LandingPage } from './components/landingPage/landingPage';
import ImageUploader from './components/imageUploader/imageUploader';
import { Header } from './components/header/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header></Header>
        <LandingPage></LandingPage>
        <ImageUploader></ImageUploader>
    </React.StrictMode>
);
