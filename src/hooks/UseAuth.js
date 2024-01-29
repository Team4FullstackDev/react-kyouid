import { useState, useEffect } from "react";
import { setCurrentUser, setIsLoggedIn } from "../redux/slice/auth.slice";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.action";
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

  const logoutAction = () => {
    localStorage.removeItem("user");
    dispatch(setCurrentUser(null));
    dispatch(setIsLoggedIn(false));
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

  return { ...authState, login, logoutAction };
}
