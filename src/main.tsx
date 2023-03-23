// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
// Router
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
// Styles
import '@styles/styles.css';
// components
import RequireAuth from "./router/RequireAuth";
import Layout from './layout/index.layout';
// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "home/",
                element: <RequireAuth component={Home}/>
            },
        ],
    },
    {
        path: "/login",
        element: <Login/>
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
