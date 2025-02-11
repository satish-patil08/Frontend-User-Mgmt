
import React, {createContext, useCallback, useEffect, useState} from 'react';
import {setToastContext} from './ToastService';
import './Toast.scss';

export const ToastContext = createContext();

export const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const showToast = useCallback((message, options = {}) => {
        const id = Date.now();
        setToasts((prev) => [...prev, {id, message, ...options}]);

        setTimeout(() => removeToast(id), 4000);
    });

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    useEffect(() => {
        setToastContext({showToast});
    }, [showToast]);

    return (
        <ToastContext.Provider value={{showToast}}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} {...toast} onClose={() => removeToast(toast.id)}/>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ message, type = "info", onClose }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [onClose, isHovered]);

    return (
        <div
            className={`toast ${type} animate-in`}
            onMouseEnter={() => setIsHovered(true)}  // Pause timeout
            onMouseLeave={() => setIsHovered(false)} // Resume timeout
        >
            <div className="toast-content">
                <span className="toast-icon">{getIcon(type)}</span>
                <span className="toast-message">{message}</span>
            </div>
            <button className="toast-close" onClick={onClose}>
                &times;
            </button>
        </div>
    );
};

const getIcon = (type) => {
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ⓘ',
    };
    return icons[type] || '';
};
