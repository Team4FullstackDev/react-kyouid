import Input from "../../atoms/Input";
export default function RegisterInput(){
    return(
        <>
        <Input type="text" label="Full Name" htmlFor="fullname"/>

<Input type="Email" label="Email" htmlFor="email"/>

<Input type="text" label="UserName" htmlFor="username"/>

<Input type="password" label="Password" htmlFor="password"/>

<Input type="date" label="Birth Date" htmlFor="birthdate"/>
        </>
    );
}