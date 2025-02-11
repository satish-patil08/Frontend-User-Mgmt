import {clearLocalStorage, removeCookie} from "./localDataStoringMgmt";

export const logout = (navigate) => {
    removeCookie("isLoggedIn", {path: '/'});
    removeCookie("fullName", {path: '/'});
    removeCookie("clientId", {path: '/'});
    removeCookie("email", {path: '/'});
    removeCookie("clientName", {path: '/'});
    removeCookie("userType", {path: '/'});
    removeCookie("theme", {path: '/'});
    removeCookie("loginTime", {path: '/'});
    clearLocalStorage();
    navigate("/login");
    document.location.reload();
};