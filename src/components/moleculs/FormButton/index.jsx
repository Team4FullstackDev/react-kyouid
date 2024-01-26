import { useDispatch, useSelector } from 'react-redux';
import ButtonLogin from '../../atoms/ButtonLogin';
import { useEffect } from 'react';
import { login } from '../../../redux/actions/auth.action';
export default function FormButton() {
	const { username, password } = useSelector((state) => state.login);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log(import.meta.env.VITE_BACKEND_BASE_URL);
	});

	return (
		<>
			<ButtonLogin type="submit" title="Sign in" className="login_signin" />
			<span className="login_button_tittle">
				Or sign in with the following methods
			</span>
			<ButtonLogin
				type="button"
				src="https://kyou.id/static/img/icon/Facebook_glyph.svg"
				title="Sign in with facebook"
				className="login_button_fb"
				onClick={() => dispatch(login({ username, password }))}
			/>
		</>
	);
}
