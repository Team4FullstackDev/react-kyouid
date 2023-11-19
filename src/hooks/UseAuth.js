import { useState, useEffect } from "react";

export default function useAuthentication() {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    user: null,
  });

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setAuthState({
      isLoggedIn: true,
      user: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuthState({
      isLoggedIn: false,
      user: null,
    });
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthState({
        isLoggedIn: true,
        user: JSON.parse(storedUser),
      });
    }
  }, []);

  return { ...authState, login, logout };
}
