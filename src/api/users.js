import {createGenericAPIBuilder} from "./createAPIBuilder";

export const loginUser = (payload) => {
    return createGenericAPIBuilder(
        'post',
        "/users/login",
        null,
        payload
    )
};
