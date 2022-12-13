import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("customer")) || null)
    
    const login = async (inputs) => {
        const res = await axios.post("http://10.0.3.98:9000/api/auth/login", inputs);
        setCurrentUser(res.data)
    }

    useEffect(()=>{
        localStorage.setItem("customer",JSON.stringify(currentUser));
    },[currentUser])


    const logout = async (inputs) => {
        await axios.post("http://10.0.3.98:9000/api/auth/logout");
        setCurrentUser(null)
    }
    return <AuthContext.Provider value={{currentUser,login,logout}}>{children}</AuthContext.Provider>
    
}