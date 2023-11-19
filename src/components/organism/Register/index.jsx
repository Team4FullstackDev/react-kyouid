import ButtonLogin from "../../atoms/ButtonLogin";
import { Link } from "react-router-dom";
import HeadLogin from "../../moleculs/HeadLogin";
import RegisterInput from "../../moleculs/RegisterInput";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/auth.action";
export default function Register() {

  const registerForm = useSelector((state) => state.register.formFill);
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.register);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(registerForm));
    if (error) {
      alert('Register failed');
    } else {
      alert('Register success');
    }
  }

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
              tittle="Register with facebook"
              className="login_button_fb"
            />

            <span className="register_content_label">Or</span>
          </div>

          <RegisterInput />

          <div className="register_button">
            <ButtonLogin
              type="submit"
              tittle="Register"
              className="register_btn"
            />
          </div>
          <Link className="register_ready" to="/login">
            Already have an account? Click here!
          </Link>
        </form>
      </div>
    </section>
  );
}
