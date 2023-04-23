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
import Monitor from './pages/Monitor/Monitor';
import Match from './pages/Match/Match';
import Profile from './pages/Profile/Profile'
import SettingsProfile from './pages/Profile/SettingsProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <RequireAuth component={Home}/>
            },
            {
                path: "/monitor",
                element: <RequireAuth component={Monitor}/>
            },
            {
                path: "/match",
                element: <RequireAuth component={Match}/>
            },

            {
                path: "/profile",
                element: <RequireAuth component={Profile}/>
            },
            {
                path: "profile/settings",
                element: <RequireAuth component={SettingsProfile}/>
            }
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
