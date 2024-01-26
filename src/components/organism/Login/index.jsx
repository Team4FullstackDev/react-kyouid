import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../moleculs/FormInput";
import FormButton from "../../moleculs/FormButton";
import HeadLogin from "../../moleculs/HeadLogin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/auth.action";
import axios from "axios";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.login);
  const { currentUser, error, message, loading } = useSelector((state) => state.auth);
  const { username, password } = loginState;

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      navigate("/", { replace: true });
      return;
    }
  }, [currentUser, navigate, error, message]); // Run this effect whenever the user changes

  useEffect(() => {
    testApi();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  async function testApi() {
    await axios
      .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/health`)
      .then((response) => {
        console.log(response.data.message.healthCheck);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  }

  return (
    //<!-- create by dosma rina br manik -->
    <section className="login">
      <div className="login_content">
        <HeadLogin />
        <form className="login_form" action="" onSubmit={onSubmit}>
          <FormInput />
          <Link className="login_forgot" to="/resetpassword">
            Forgot your password
          </Link>
          {loading && <div className="login_loading">Loading...</div>}
          {(error || message) && <div className="login_error">{message}</div>}
          <div className="login_button">
            <FormButton />
          </div>
          <Link className="login_register" to="/register">
            Don&apos;t have an account? click here!
          </Link>
        </form>
      </div>
    </section>
  );
}
