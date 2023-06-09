import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [cartSize, setCartSize] = useState(0);

    const [userId, setUserId] = useState(null);
    const login = (id) => {
        setUserId(id);
    };

    const logout = () => {
        setUserId(null);
    };

    const getCartSize = () => {
        return cartSize;
    }

    return (
        <AuthContext.Provider value={{userId, login, logout, setCartSize, getCartSize}} >
            {children}
        </AuthContext.Provider>
    );  

};
