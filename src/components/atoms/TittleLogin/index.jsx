import { Link } from "react-router-dom";

export default function TittleLogin ({ img, title}){
    return(
        <>
         <Link to="index.html"><img className="login_logo" src={img} alt=""/></Link>
            <h1 className="login_tittle">{title}</h1>
        </>
    );
}