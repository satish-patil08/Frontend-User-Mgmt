export const createGenericReducer = (request, initialState) => {
    return (state = {
        [initialState.loadingField]: false,
        [initialState.responseField]: {}
    }, action) => {
        switch(action.type) {
            case request.request:
                return {
                    [initialState.loadingField]: true,
                    [initialState.responseField]: {}
                };
            case request.success:
                return {
                    [initialState.loadingField]: false,
                    [initialState.responseField]: action.payload
                };
            case request.fail:
                return {
                    [initialState.loadingField]: false,
                    [initialState.responseField]: action.payload
                };
            default:
                return state;
        }
    }
};
