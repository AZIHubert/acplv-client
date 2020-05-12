import React, {
    useState,
    createContext
} from 'react';

import { useMediaQuery } from 'react-responsive';

export const HMenuContext = createContext();

export default ({children}) => {
    const [open, setOpen] = useState(false);
    const preventScrollTouch = e => e.preventDefault();
    const handleMediaQueryChange = matches => {
        if(!matches) setOpen(false);
    }
    const isVerticalMobile = useMediaQuery(
        {query: '(max-width: 600px)'},
        undefined,
        handleMediaQueryChange
    );
    const menuClick = (isOpen) => {
        if(isOpen) {
            document.body.classList.add("no-scroll");
            document.documentElement.className = 'no-scroll';
            window.addEventListener( 'touchmove', preventScrollTouch);
        }
        else {
            document.body.classList.remove("no-scroll");
            document.documentElement.className = '';
            window.removeEventListener('touchmove', preventScrollTouch);
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