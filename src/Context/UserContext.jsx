import { createContext, useState, useEffect } from "react";
import React from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    // Load user from localStorage
    const [user, setUser] = useState(() => {
        return localStorage.getItem("user") || null;
    });

    // Save user to localStorage whenever it changes
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", user);
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
