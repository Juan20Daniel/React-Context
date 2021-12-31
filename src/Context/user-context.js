import React, { createContext, useState, useMemo, useContext } from 'react';

const UserContext = createContext();

export function UserProvider(props) {
    const [ user, setUser ] = useState(false);

    const value = useMemo(() => {
        return ({
            user
        })
    }, [user]);

    return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
    const context = useContext(UserContext);

    if(!context) {
        throw new Error("useUser debe estar dentro del disque proveedor!!");
    }
    return context;
}