import { ToastService } from "./ToastService";

export const TOAST_STATUS = {
    success: "SUCCESS",
    warn: "WARN",
    error: "ERROR"
};

export const triggerToast = (type, message) => {
    if (type === TOAST_STATUS.success) ToastService.success(message);
    else if (type === TOAST_STATUS.warn) ToastService.warn(message);
    else if (type === TOAST_STATUS.error) ToastService.error(message);
};
