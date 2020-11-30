require('dotenv').config()

export const KEY = process.env.REACT_APP_KEY;

export const authenticated = () => localStorage.getItem(KEY) != null;

export const getToken = () => localStorage.getItem(KEY);

export const login = token => {
    localStorage.setItem(KEY, token);
};

export const logout = () => {
    localStorage.removeItem(KEY);
};