import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../moleculs/FormInput';
import FormButton from '../../moleculs/FormButton';
import HeadLogin from '../../moleculs/HeadLogin';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/auth.action';
import axios from 'axios';
export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginState = useSelector((state) => state.login);
	const { currentUser, error, message } = useSelector((state) => state.auth);
	const { username, password } = loginState;

	useEffect(() => {
		if (currentUser) {
			localStorage.setItem('user', JSON.stringify(currentUser));
			navigate('/', { replace: true });
			return;
		}
		console.log(error, message);
	}, [currentUser, navigate, error, message]); // Run this effect whenever the user changes

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(login({ username, password }));
		console.log(currentUser);
	};

	async function testApi() {
		await axios
			.get('/v1/health')
			.then((response) => {
				console.log(response.data.message.healthCheck);
			})
			.catch((error) => {
				console.log('error ', error);
			});
	}

	testApi();

	return (
		//<!-- create by dosma rina br manik -->
		<section className="login">
			<div className="login_content">
				<HeadLogin />
				<form className="login_form" action="" onSubmit={onSubmit}>
					<FormInput />
					<Link className="login_forgot" to="/resetpassword">
						Forgot your password
					</Link>

					<div className="login_button">
						<FormButton />
					</div>
					<Link className="login_register" to="/register">
						Don&apos;t have an account? click here!
					</Link>
				</form>
			</div>
		</section>
	);
}
