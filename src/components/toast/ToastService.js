let toastContext = null;

export const ToastService = {
    success: (message) => toastContext?.showToast(message, { type: 'success' }),
    error: (message) => toastContext?.showToast(message, { type: 'error' }),
    warn: (message) => toastContext?.showToast(message, { type: 'warning' }),
    info: (message) => toastContext?.showToast(message, { type: 'info' }),
};

export const setToastContext = (context) => {
    toastContext = context;
};
