import React from "react";
import { DialogProvider } from "./dialog";
import { ToastProvider } from "./toast";

const BeerProviders = ({
    children,
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <DialogProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </DialogProvider>
    )
};

export default BeerProviders;