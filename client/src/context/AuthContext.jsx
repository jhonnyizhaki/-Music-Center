import React, { createContext, useContext, useState } from "react";

// יצירת ההקשר
export const AuthContext = createContext();

// פונקציה מותאמת לשימוש בהקשר
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ספק ההקשר
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const userData = { email, token: "fakeToken123" }; // דוגמה לנתוני משתמש
    setUser(userData);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
