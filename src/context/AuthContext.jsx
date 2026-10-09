import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("realtyUser")) || null
  );

  const signup = (name, email, password) => {
    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem("realtyUser", JSON.stringify(newUser));
    setUser(newUser);

    return true;
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("realtyUser"));

    if (!savedUser) {
      return false;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      setUser(savedUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("realtyUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}