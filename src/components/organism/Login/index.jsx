import { Link } from "react-router-dom"
import FormInput from "../../moleculs/FormInput"
import FormButton from "../../moleculs/FormButton"
import HeadLogin from "../../moleculs/HeadLogin"
export default function Login(){
    return(
        //<!-- create by dosma rina br manik -->
    <section className="login">
        <div className="login_content">
            <HeadLogin/>
            <form className="login_form" action="">
               <FormInput/>
                <Link className="login_forgot" to="/resetpassword">
                    Forgot your password
                </Link>

                <div className="login_button">
                    <FormButton/>
                </div>
                <Link className="login_register" to="/register">Don't have an account? click here!</Link>
            </form>
        </div>
    </section>
    )
}