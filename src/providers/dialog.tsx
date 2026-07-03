import { createContext, useContext, type ReactNode, useState } from "react";

import React from 'react';
import TextAndIcon from "../helpers/textAndIcon";
import { pos } from "../types";
import { Button } from "../Button/Button";


export interface DialogData {
    title: string,
    content: any,
    pos?: pos

}

export const DialogContext = createContext<{ pushDialog: (toast: Omit<DialogData, 'id'>) => void }>({
    pushDialog: () => { },
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [dialog, setDialog] = useState<DialogData>({
        title: "Error",
        content: "The dialog has not been set. please report this to the beer css react"
    });

    const pushDialog = (dialog: DialogData) => {
        setDialog(dialog);
        (document.querySelector('#HiddenButtonForPressing') as HTMLButtonElement | null)?.click();
    };

    return (
        <DialogContext.Provider value={{ pushDialog: pushDialog }}>
            {children}
            <div hidden={true}>
                <Button id="HiddenButtonForPressing" data-ui="#dialog" hidden={true}></Button>
            </div>
            <dialog id="dialog" className={`${dialog.pos} `} data-ui="#dialog">
                <h5>{dialog.title}</h5>
                <p>{dialog.content}</p>
                <nav className="right-align no-space">
                    <Button data-ui="#dialog" forms={["transparent", "link"]} >
                        Cancel
                    </Button>
                    <Button data-ui="#dialog" forms={["transparent", "link"]} >
                        Confirm
                    </Button>
                </nav>
            </dialog>
        </DialogContext.Provider>
    );
};