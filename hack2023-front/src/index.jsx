import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/app/app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.module.scss';
import { ImproveImages } from './routes/improveImages/improveImages';
import { AboutUs } from './routes/aboutUs/aboutUs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <App />,
    },
    {
        path: '/improve-images',
        element: <ImproveImages />,
    },
    {
        path: '/about-us',
        element: <AboutUs />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
