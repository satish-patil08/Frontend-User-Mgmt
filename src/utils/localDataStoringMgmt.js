import Cookies from "universal-cookie"
import secureLocalStorage from "react-secure-storage";


export const getCookie = (name) => new Cookies().get(name)
export const setCookie = (name, value, options) => new Cookies().set(name, value, options)
export const removeCookie = (name, options) => new Cookies().remove(name, options)

export const setLocalStorageItem = (key, value) => secureLocalStorage.setItem(key, value)
export const getLocalStorageItem = (key) => secureLocalStorage.getItem(key)
export const removeLocalStorageItem = (key) => secureLocalStorage.removeItem(key)
export const clearLocalStorage = () => secureLocalStorage.clear();
