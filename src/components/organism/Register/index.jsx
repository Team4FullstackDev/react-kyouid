import ButtonLogin from "../../atoms/ButtonLogin";
import { Link } from "react-router-dom";
import HeadLogin from "../../moleculs/HeadLogin";
import RegisterInput from "../../moleculs/RegisterInput";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/auth.action";
import { useEffect, useState } from "react";
import { setMessage } from "../../../redux/slice/auth.slice";
export default function Register() {

  const registerForm = useSelector((state) => state.register.formFill);
  const dispatch = useDispatch();
  const { message, loading } = useSelector((state) => state.register);

  
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(register(registerForm));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // If there's a message, show it and set a timer to hide it after a few seconds
    setShowMessage(true);
    const timer = setTimeout(() => {
      dispatch(setMessage(null));
      setShowMessage(false);
    }, 3000)

    return () => clearTimeout(timer)
  }, [message, dispatch]);

  return (
    <section className="register">
      <div className="register_content">
        <HeadLogin />

        <form
          className="register_form_content"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="register_fb">
            <ButtonLogin
              type="button"
              src="https://kyou.id/static/img/icon/Facebook_glyph.svg"
              title="Register with facebook"
              className="login_button_fb"
            />

            <span className="register_content_label">Or</span>
          </div>

          <RegisterInput />

          <div className="register_button">
            <ButtonLogin
              type="submit"
              title="Register"
              className="register_btn"
            />
          </div>

          {loading && <p>Loading...</p>}
          {showMessage && <p className="register_message">{message}</p>}

          <Link className="register_ready" to="/login">
            Already have an account? Click here!
          </Link>
        </form>
      </div>
    </section>
  );
}
