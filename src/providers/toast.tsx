import { createContext, useContext, type ReactNode, useState } from "react";

import React from 'react';
import TextAndIcon from "../helpers/textAndIcon";

export type ToastType = "" | "error" | "primary" | "secondary" | "tertiary";

export interface ToastData {
    id: number;
    text: string;
    type?: ToastType;
    icon?: string;
    // Optionele actieknop
    action?: {
        label: string;
        onClick: React.MouseEventHandler<HTMLElement>;
    };
}

export const ToastContext = createContext<{ addToast: (toast: Omit<ToastData, 'id'>) => void }>({
    addToast: () => { },
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const addToast = (toast: Omit<ToastData, 'id'>) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { ...toast, id }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((currentToast) => currentToast.id !== id));
        }, 5000);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`snackbar active ${toast.type}`}>
                        <div className="max">
                            <TextAndIcon
                                icon={toast.icon}>
                                {toast.text}
                            </TextAndIcon>
                        </div>
                        {toast.action &&
                            <a className="inverse-primary-text"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toast.action?.onClick(e); // Voer de actie uit
                                    // Verwijder direct uit de lijst
                                    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
                                }}
                            >
                                {toast.action.label}
                            </a>
                        }
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};