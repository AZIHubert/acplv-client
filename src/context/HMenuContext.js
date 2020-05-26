import React, {
    useState,
    createContext,
    useEffect
} from 'react';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
} from 'body-scroll-lock';

export const HMenuContext = createContext();

export default ({children}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        return () => clearAllBodyScrollLocks();
    }, []);
    const menuClick = (isOpen) => {
        if(isOpen) {
            disableBodyScroll(document.getElementsByTagName("html")[0]);
        }
        else {
            enableBodyScroll(document.getElementsByTagName("html")[0]);
        };
        setOpen(isOpen);
    }
    return (
        <HMenuContext.Provider
            value={{
                open,
                menuClick
            }}
        >
            {children}
        </HMenuContext.Provider>
    );
};