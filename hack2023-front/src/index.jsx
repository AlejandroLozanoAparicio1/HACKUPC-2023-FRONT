import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/app/app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.module.scss';
import { ImproveImages } from './routes/improveImages/improveImages';

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
