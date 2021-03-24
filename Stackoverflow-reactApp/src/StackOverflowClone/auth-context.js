import React, { useEffect, useState, createContext } from "react";
import { Route, Link, BrowserRouter as Router, Switch, Redirect, useHistory, useLocation } from "react-router-dom";


const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const AuthContext = createContext({});
const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const login = ({ email, password }) => {
        const temp = {
            email: email,
            password: password
        }
        console.log("User",temp);
        setUser(temp);

    }

    const logout = () => {
        setUser(null);
    }
    const authContextValue = {
        user,
        login,
        logout
    };
    return <AuthContext.Provider value={authContextValue} > {children} </AuthContext.Provider>
}



export { AuthProvider, useAuth }