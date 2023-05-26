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
import '@globalStyles/styles.css';
// components
import RequireAuth from "./router/RequireAuth";
import AppLayout from './modules/app/layout/App.layout';
// Toaster / Alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Pages.
import Home from './modules/app/pages/Home/Home';
import Login from './modules/app/pages/Auth/Login/Login';
import Monitor from './modules/app/pages/Monitor/Monitor';
import Match from './modules/app/pages/Match/Match';
import Profile from './modules/app/pages/Profile/Profile';
import Chat from './modules/app/pages/Chat/Chat';
import Auth from "./modules/app/pages/Auth/Auth";
import SignIn from "./modules/app/pages/Auth/SignIn/SignIn";
import SettingsProfile from "./modules/app/pages/settings/SettingsProfile";
import Dashboard from './modules/admin/pages/Dashboard/Dashboard';
import ProfileControl from './modules/admin/pages/ProfileControl/ProfileControl';
import Settings from './modules/admin/pages/Settings/Settings';
import ReportedProfiles from './modules/admin/pages/ReportedProfiles/ReportedProfiles'
import AdminLayout from "./modules/admin/layout/Admin.layout";
import {createTheme, ThemeProvider} from "@mui/material";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>
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
                path: "/user",
                element: <RequireAuth component={Profile}/>
            },
            {
                path: "/user/:userEmail",
                element: <RequireAuth component={Profile}/>
            },
            {
                path: "/user/settings",
                element: <RequireAuth component={SettingsProfile}/>
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
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <RequireAuth component={Dashboard}/>
            },
            {
                path: "/admin/profilecontrol",
                element: <RequireAuth component={ProfileControl}/>
            },
            {
                path: "/admin/settings",
                element: <RequireAuth component={Settings}/>
            },
            {
                path: "/admin/reportedProfiles",
                element: <RequireAuth component={ReportedProfiles}/>
            },
        ],
    },

]);

const theme = createTheme({
  palette: {
    primary: {
      light: "#807cf6",
      main: "#615CF4",
      dark: "#4340aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33dcb7",
      main: "#00D4A6",
      dark: "#009474",
      contrastText: "#000",
    },
    error: {
      light: "#ff7b83",
      main: "#FF5B64",
      dark: "#b23f46",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
                <ToastContainer/>
            </ThemeProvider>
        </Provider>
    </>,
)
