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

import { useMediaQuery } from 'react-responsive';

export const HMenuContext = createContext();

export default ({children}) => {
    const [open, setOpen] = useState(false);
    const handleMediaQueryChange = matches => {
        if(!matches) {
            setOpen(false);
            enableBodyScroll(document.getElementsByTagName("html")[0]);
        };
    }
    const isVerticalMobile = useMediaQuery(
        {query: '(max-width: 600px)'},
        undefined,
        handleMediaQueryChange
    );
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