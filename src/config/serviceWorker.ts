import {axiosApiInstance} from "@config/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;

export const registerSw = async () => {
    if ('serviceWorker' in navigator) {
        const url = `${import.meta.env.VITE_PUBLIC_URL}/sw.js`;
        const registration = await navigator.serviceWorker.register(url, {scope: '/'});
        console.log('service config is', {reg: registration});
        return registration;
    }
    throw Error('serviceworker not supported');
}

export const subscribeNotifications = async (serviceWorkerReg) => {
    let subscription = await serviceWorkerReg.pushManager.getSubscription();
    console.log({subscription});
    if (subscription === null) {
        subscription = await serviceWorkerReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: import.meta.env.VITE_SERVER_PUBLIC_KEY,
        });
        await axiosApiInstance.post(`${API_URL}/user/suscribe`, subscription);
    }
}

export const askPermission = () => {
    return new Promise(function (resolve, reject) {
        const permissionResult = Notification.requestPermission(function (result) {
            resolve(result);
        });

        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    }).then(function (permissionResult) {
        if (permissionResult !== 'granted') {
            throw new Error("We weren't granted permission.");
        }
    });
}

