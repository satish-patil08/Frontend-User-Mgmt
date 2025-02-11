const createGenericActionType = (primaryKey) => ({
    request: `${primaryKey}_REQUEST`,
    success: `${primaryKey}_SUCCESS`,
    fail: `${primaryKey}_FAIL`
});

// Authentication Action Types
export const LOGIN_USER = createGenericActionType("LOGIN_USER");
