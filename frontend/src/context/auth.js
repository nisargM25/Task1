import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("customer")) || null)

    const login = async (inputs) => {
        const res = await axios.post("http://10.0.3.98:9000/api/auth/login", inputs, { withCredentials: true, credentials: 'include' });
        setCurrentUser(res.data)
    }

    useEffect(() => {
        sessionStorage.setItem("customer", JSON.stringify(currentUser));
    }, [currentUser])

    return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>

}
