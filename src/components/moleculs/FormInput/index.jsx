import { useDispatch, useSelector } from "react-redux";
import Input from "../../atoms/Input";
import { setUsername, setPassword } from "../../../redux/slice/login.slice";
export default function FormInput() {
  const loginState = useSelector((state) => state.login);
  const { username, password } = loginState;
  const dispatch = useDispatch();

  return (
    <>
      <Input
        label="Username"
        type="text"
        htmlFor="username"
        value={username}
        onChangeHandler={(e) => dispatch(setUsername(e.target.value))}
      />
      <Input
        label="Password"
        type="password"
        htmlFor="password"
        value={password}
        onChangeHandler={(e) => dispatch(setPassword(e.target.value))}
      />
    </>
  );
}
