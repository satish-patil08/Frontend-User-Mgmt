import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {getLocalStorageItem} from "../utils/localDataStoringMgmt";

export const createGenericAPIBuilder = (method, endpoint, params, data = {}) => {
    return axios({
        method: method,
        url: `${BASE_URL}${endpoint}`,
        params: params,
        headers: {
            Authorization: getLocalStorageItem("authToken"),
            // "X-Client": getCookie("clientId"),
            "Content-Type": "application/json",
        },
        data: data,
    });
};