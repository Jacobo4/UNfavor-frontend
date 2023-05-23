import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "../../config/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;

export interface UserProfile {
    favor: {
        reviews: {
            comments: Array<string>
        },
        title: string,
        description: string,
        location: string,
        date_published: string,
        favor_state: string,
        possible_matches: Array<string>
    },
    preferences: {
        favor_filters: {
            favor_type: string,
            max_distance_km: number
        }
    },
    _id: string,
    name: string,
    email: string,
    phone: string,
    age: number,
    admin: boolean,
    __v: number
}

export type getUserProfileInfoValues = {
    query: string
}

export interface getUserProfileInfoSuccess {
    message: string;
    user: UserProfile;
}


export type  updateUserInfoFormValues = {
    newUserData: {
        name: string,
        phone: string,
        age: number,
        favor: {
            title: string,
            description: string,
            location: string
        }
    }
}
}

export interface UpdateUserInfoSuccess {
    message: string;
}

export interface UpdateUserInfoFailure {
    message: string | any;
    error: string;
}

export type UpdateFavorFiltersFormValues = {
    favor_type: string,
    max_distance_km: number,
}
export interface UpdateFavorFiltersSuccess {
    message: string;
}
export interface UpdateFavorFiltersFailure {
    message: string | any;
    error: string;
}

/**
 * This function update the user info by sending a POST request to the endpoint

 * @param formValues The form values of the user.
 * @param rejectWithValue The callback function to reject the promise with a
 * custom error message.
 *
 * @returns A promise that resolves with the response data, or rejects with an
 * error message.
 */

export const updateMyUserInfo = createAsyncThunk(
    'user/updateMyUserInfo',
    async (formValues: updateUserInfoFormValues, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.put(
                `${API_URL}/user/updateProfile`,
                {...formValues},
                config
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
export const updateFavorFilters = createAsyncThunk(
    '/favor/changeFavorFilters',
    async (formValues: UpdateFavorFiltersFormValues, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axiosApiInstance.post(
                `${API_URL}/favor/changeFavorFilters`,
                {...formValues},
                config
            );
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
export const getProfileInfo = createAsyncThunk(
    'user/getProfileInfo',
    async (values: getUserProfileInfoValues, {rejectWithValue, getState}) => {
        const { token } = getState().auth;

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            //TODO: change this to the new unified endpoint
            const {data} = await axiosApiInstance.get(
                `${API_URL}/user/info`,
                // {...values},
                config
            );

            return {me: token.email, ...data};
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
