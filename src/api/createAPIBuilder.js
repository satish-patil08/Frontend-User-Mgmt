import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {getLocalStorageItem} from "../utils/localDataStoringMgmt";

export const createGenericAPIBuilder = (method, endpoint, params, data = {}) => {
    return axios.post({
        method,
        url: `${BASE_URL}${endpoint}`,
        params,
        headers: {
            Authorization: getLocalStorageItem('authToken'),
            "content-type": "application/json",
        }
    })
}