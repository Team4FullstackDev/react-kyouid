import { Link } from "react-router-dom";
import ButtonLogin from "../../atoms/ButtonLogin";

export default function ResetPassword(){
    return(
        <section className="reset-page">
    <div className="reset-page-content">
        <h1 className="reset-page-tittle">Reset Password</h1>
        <p className="reset-page-detail">
            Masukkan email kamu pada kolom dibawah ini untuk mereset passwordmu. Kyou akan mengirimkan email yang berisi instruksi untuk mereset passwordmu.
        </p>
        <form className="reset-page-form" action="">
            <input type="email" name="Email" placeholder="Email" className="reset-page-input"/>
            <ButtonLogin  type="button" tittle="Submit" className="reset-page-button"/>
        </form>
        <Link className="reset-page_back-main" to="/">Kembali ke Kyou.id</Link>    
    </div>
    
  </section>
    );
}