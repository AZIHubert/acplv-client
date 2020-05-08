import React, {
    useState,
    useEffect,
    createContext
} from 'react';

export const FirstLoadContext = createContext();

export default ({children}) => {
    const [firstLoad, setFirstLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setFirstLoad(false);
    }, []);
    return (
        <FirstLoadContext.Provider
            value={{
                firstLoad,
                isLoading,
                setIsLoading
            }}
        >
            {children}
        </FirstLoadContext.Provider>
    );
};