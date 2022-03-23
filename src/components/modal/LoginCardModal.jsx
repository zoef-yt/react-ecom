import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth/auth-context';
import '../css/products-page.css';
import { useModal } from '../../context/modal/modal-context';
const LoginCardModal = () => {
	const { isLogin, isLoading, error, toggleIsLogin, signUpHandler, loginHandler, logoutHandler, errorHandler } = useAuth();
	const { toggleModal } = useModal();

	const defaultText = {
		email: '',
		password: '',
		confirmPassword: '',
		emailError: false,
		passWordError: false,
		confirmPasswordError: false,
	};

	const [textFields, setTextFields] = useState(defaultText);

	const setUserDetails = (e) => {
		errorHandler(false, '');

		setTextFields({
			...textFields,
			[e.target.name]: e.target.value,
			emailError: false,
			passWordError: false,
			confirmPasswordError: false,
		});
	};

	const signupChecker = () => {
		const { email, password, confirmPassword } = textFields;

		email.length !== 0
			? email
					.toLowerCase()
					.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					)
				? password.length !== 0
					? confirmPassword.length !== 0
						? password === confirmPassword
							? signUpHandler({ email: email, password: password })
							: (setTextFields({
									...textFields,
									confirmPasswordError: true,
									passWordError: true,
							  }),
							  errorHandler(true, 'Password and Confirm Password must be same'))
						: (setTextFields({ ...textFields, confirmPasswordError: true }), errorHandler(true, 'Confirm Password is required'))
					: (errorHandler(true, 'Password is required'), setTextFields({ ...textFields, passWordError: true }))
				: (errorHandler(true, 'Email is invalid'), setTextFields({ ...textFields, emailError: true }))
			: (setTextFields({ ...textFields, emailError: true }), errorHandler(true, 'Email is required'));
	};

	const loginChecker = async () => {
		const { email, password } = textFields;

		return email.length !== 0
			? email
					.toLowerCase()
					.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					)
				? password.length !== 0
					? loginHandler({ email: email, password: password })
					: (errorHandler(true, 'Password is required'), setTextFields({ ...textFields, passWordError: true }))
				: (errorHandler(true, 'Email is invalid'), setTextFields({ ...textFields, emailError: true }))
			: (setTextFields({ ...textFields, emailError: true }), errorHandler(true, 'Email is required'));
	};

	return (
		<div className='modal-card'>
			<div className='flex-column align-items-center space-evenly'>
				<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
				<div className='input-group'>
					<InputField
						labelText='Email Address'
						type='email'
						name='email'
						onChange={(event) => setUserDetails(event)}
						hasError={textFields.emailError}
						value={textFields.email}
					/>
					<InputField
						labelText='Password'
						type='password'
						name='password'
						onChange={(event) => setUserDetails(event)}
						hasError={textFields.passWordError}
						value={textFields.password}
					/>
					{!isLogin && (
						<>
							<InputField
								labelText='Confirm password'
								type='password'
								name='confirmPassword'
								onChange={(event) => setUserDetails(event)}
								hasError={textFields.confirmPasswordError}
								value={textFields.confirmPassword}
							/>
						</>
					)}
				</div>

				{/*//! Commented for future 
				{isLogin && (
					<div className='remember-me-block'>
						<input type='checkbox' className='checkbox' name='remember me' />
						<label className='margin-right remember-me-text' htmlFor='remember-me'>
							Remember me
						</label>
					</div>
				)} */}

				<button
					onClick={
						isLogin
							? async () => {
									const success = await loginChecker();
									success ? (toggleModal(), setTextFields(defaultText)) : null;
							  }
							: () => {
									signupChecker();
							  }
					}
					className={`btn btn-products ${isLoading ? 'btn-products-disabled' : 'btn-primary'}`}
				>
					{isLoading ? 'Loading...' : isLogin ? 'Login' : 'SignUp'}
				</button>
				{error.hasError && <p className='modal-error'> *{error.errorMessage} </p>}
				<button
					onClick={() => {
						toggleIsLogin();
						errorHandler(false, '');
					}}
					className=' btn-link btn'
				>
					{isLogin ? "Don't have account?Sign up!" : 'Already have account?Log In!'}
				</button>
			</div>
		</div>
	);
};

export { LoginCardModal };

const InputField = ({ labelText, type, name, onChange, value, hasError }) => {
	return (
		<>
			<label htmlFor='email'>{labelText}</label>
			<input
				className={`text-field ${hasError && 'text-field-error'} `}
				autoComplete='off'
				type={type}
				name={name}
				placeholder={labelText}
				onChange={onChange}
				value={value}
			/>
		</>
	);
};
