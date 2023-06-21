import React, { createContext } from 'react';

// creating context
const AuthContext = createContext("default-value");

const UserContext = ({ children }) => {

    // set context value
    const contextValue = {};

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;