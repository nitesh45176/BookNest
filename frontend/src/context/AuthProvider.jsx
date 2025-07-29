import React, { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  let parsedUser = null;
  try {
    const item = localStorage.getItem("Users");
    if (item && item !== "undefined") {
      parsedUser = JSON.parse(item);
    }
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
