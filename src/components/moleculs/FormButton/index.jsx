import ButtonLogin from "../../atoms/ButtonLogin";
export default function FormButton() {
  return (
    <>
      <ButtonLogin type="submit" tittle="Sign in" className="login_signin" />
      <span className="login_button_tittle">
        Or sign in with the following methods
      </span>
      <ButtonLogin
        type="button"
        src="https://kyou.id/static/img/icon/Facebook_glyph.svg"
        tittle="Sign in with facebook"
        className="login_button_fb"
      />
    </>
  );
}
