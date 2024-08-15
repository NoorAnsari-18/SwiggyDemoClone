import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { appRouter } from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {appRouter}/>   // Providing the Router Configuration as Prop value to the RouterProvider.
);

