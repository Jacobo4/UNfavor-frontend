// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
//Redux
import { Provider } from 'react-redux';
import { store } from '@store/store';
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
// Toaster / Alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Pages.
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Monitor from './pages/Monitor/Monitor';
import Match from './pages/Match/Match';
import Profile from './pages/Profile/Profile'
import Chat from './pages/Chat/Chat';
import Auth from "./pages/Auth/Auth";
import SignIn from "./pages/Auth/SignIn/SignIn";


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
                path: "/chat",
                element: <RequireAuth component={Chat}/>
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth/>,
        children: [
            {
                path: "/auth/login",
                element: <Login/>
            },
            {
                path: "/auth/signin",
                element: <SignIn/>
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            <ToastContainer/>
        </Provider>
    </React.StrictMode>,
)
