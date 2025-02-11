import {clearLocalStorage, removeCookie} from "./localDataStoringMgmt";

export const logout = (navigate) => {
    removeCookie("authToken", {path: '/'});
    clearLocalStorage();
    navigate("/login");
    document.location.reload();
};