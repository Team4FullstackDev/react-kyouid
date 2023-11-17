import Input from "../../atoms/Input";
export default function FormInput(){
    return(
        <>
        <Input label="Username" type="text" htmlFor="username"/>
        <Input label="Password" type="password" htmlFor="password"/>
        </>
    );
}