import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {getCookie, getLocalStorageItem} from "../utils/localDataStoringMgmt";

export const createGenericAPIBuilder = (method, endpoint, params, data = {}) => {
    return axios({
        method: method,
        url: `http://20.201.119.138${endpoint}`,
        params: params,
        headers: {
            Authorization: getLocalStorageItem("authToken"),
            // "X-Client": getCookie("clientId"),
            "Content-Type": "application/json",
        },
        data: data,
    });
};