import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [cartSize, setCartSize] = useState(0);

    const [userId, setUserId] = useState(() => {
        const savedUserId = localStorage.getItem("userId");
        return savedUserId ? JSON.parse(savedUserId) : null;
    });

    useEffect(() => {
        localStorage.setItem("userId", JSON.stringify(userId));
    }, [userId]);

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
