import { useDispatch, useSelector } from "react-redux";
import Input from "../../atoms/Input";
import { setFormFill } from "../../../redux/slice/register.slice";
export default function RegisterInput() {
  const registerForm = useSelector((state) => state.register.formFill);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setFormFill({ name, value }));
  };

  return (
    <>
      <Input
        type="text"
        label="Full Name"
        name="name"
        htmlFor="fullname"
        value={registerForm?.name}
        onChangeHandler={(e) => onChangeHandler(e)}
      />

      <Input
        type="email"
        label="Email"
        name="email"
        htmlFor="email"
        value={registerForm?.email}
        onChangeHandler={(e) => onChangeHandler(e)}
      />

      <Input
        type="text"
        label="UserName"
        name="username"
        htmlFor="username"
        value={registerForm?.username}
        onChangeHandler={(e) => onChangeHandler(e)}
      />

      <Input
        type="password"
        label="Password"
        name="password"
        htmlFor="password"
        value={registerForm?.password}
        onChangeHandler={(e) => onChangeHandler(e)}
      />

      <Input
        type="date"
        label="Birth Date"
        name="birthdate"
        htmlFor="birthdate"
        value={registerForm?.birthdate}
        onChangeHandler={(e) => onChangeHandler(e)}
      />
    </>
  );
}
