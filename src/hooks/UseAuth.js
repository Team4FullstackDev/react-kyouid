import { useState, useEffect } from "react";
import { setCurrentUser } from "../redux/slice/auth.slice";
import { useDispatch } from "react-redux";
export default function useAuthentication() {


  const dispatch = useDispatch();

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
    dispatch(setCurrentUser(null));
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
