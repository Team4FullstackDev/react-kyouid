import ButtonLogin from "../../atoms/ButtonLogin";
import { Link } from "react-router-dom";
import HeadLogin from "../../moleculs/HeadLogin";
import RegisterInput from "../../moleculs/RegisterInput";
export default function Register() {
  return (
    <section className="register">
      <div className="register_content">
        <HeadLogin />

        <form className="register_form_content" action="">
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
