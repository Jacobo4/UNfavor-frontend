// api.ts

import {IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor, getBrowserLocalStorage} from 'axios-jwt'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL;

// 1. Create an axios instance that you wish to apply the interceptor to
export const axiosApiInstance = axios.create({baseURL: BASE_URL})

const requestRefresh: TokenRefreshRequest = async (refreshToken: string): Promise<IAuthTokens | string> => {
    const response = await axios.post(`${BASE_URL}/user/refresh`, {token: refreshToken});
    return response.data.access;
}

applyAuthTokenInterceptor(axiosApiInstance, {requestRefresh})
const getStorage = getBrowserLocalStorage
applyAuthTokenInterceptor(axiosApiInstance, {requestRefresh, getStorage})