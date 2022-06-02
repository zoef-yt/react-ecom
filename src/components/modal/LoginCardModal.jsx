import React, { useState, useEffect } from 'react';
import '../css/products-page.css';
import { useAuth, useModal } from '../../context/index';
import { ShowPasswordEyeIcon, HidePasswordEyeIcon } from '../../assets/svg/svg';
import './LoginCardModal.css';
const AuthModalComponent = () => {
	const { isLogin, isLoading, error, toggleIsLogin, signUpHandler, loginHandler, logoutHandler, errorHandler } = useAuth();
	const { closeModal } = useModal();
	const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
	const defaultText = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		nameError: false,
		emailError: false,
		passWordError: false,
		confirmPasswordError: false,
	};

	const testUser = {
		email: 'shaikhzoef36@gmail.com',
		password: 'shaikhzoef',
	};
	const [textFields, setTextFields] = useState(defaultText);

	const setUserDetails = (e) => {
		errorHandler(false, '');

		setTextFields({
			...textFields,
			[e.target.name]: e.target.value,
			nameError: false,
			emailError: false,
			passWordError: false,
			confirmPasswordError: false,
		});
	};

	const signupChecker = () => {
		const { email, password, confirmPassword, name } = textFields;
		name.length > 2
			? email.length !== 0
				? email
						.toLowerCase()
						.match(
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						)
					? password.length !== 0
						? confirmPassword.length !== 0
							? password === confirmPassword
								? signUpHandler({ email: email, password: password, name: name })
								: (setTextFields({
										...textFields,
										confirmPasswordError: true,
										passWordError: true,
								  }),
								  errorHandler(true, 'Password and Confirm Password must be same'))
							: (setTextFields({ ...textFields, confirmPasswordError: true }), errorHandler(true, 'Confirm Password is required'))
						: (errorHandler(true, 'Password is required'), setTextFields({ ...textFields, passWordError: true }))
					: (errorHandler(true, 'Email is invalid'), setTextFields({ ...textFields, emailError: true }))
				: (setTextFields({ ...textFields, emailError: true }), errorHandler(true, 'Email is required'))
			: (setTextFields({ ...textFields, nameError: true }), errorHandler(true, 'Name must be atleast 2 characters long'));
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

	const togglePassword = (name) => {
		setShowPassword({ ...showPassword, [name]: !showPassword[name] });
	};

	const testLoginHandler = async () => {
		setTextFields((prev) => ({
			...prev,
			password: testUser.password,
			email: testUser.email,
		}));
		const success = await loginHandler({ email: testUser.email, password: testUser.password });
		success ? (closeModal(), setTextFields(defaultText)) : null;
	};
	return (
		<div className='modal-card' onClick={(e) => e.stopPropagation()}>
			<div className='flex-column align-items-center space-evenly'>
				<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
				<div className='input-group'>
					{!isLogin && (
						<InputField
							labelText='Name'
							type='text'
							name='name'
							onChange={setUserDetails}
							value={textFields.name}
							hasError={textFields.nameError}
						/>
					)}
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
						type={!showPassword.password ? 'password' : 'text'}
						name='password'
						onChange={(event) => setUserDetails(event)}
						hasError={textFields.passWordError}
						value={textFields.password}
						passwordType={'password'}
						onClick={togglePassword}
					/>
					{!isLogin && (
						<>
							<InputField
								labelText='Confirm password'
								type={!showPassword.confirmPassword ? 'password' : 'text'}
								name='confirmPassword'
								onChange={(event) => setUserDetails(event)}
								hasError={textFields.confirmPasswordError}
								value={textFields.confirmPassword}
								onClick={togglePassword}
								passwordType={'confirmPassword'}
							/>
						</>
					)}
				</div>

				{isLogin && (
					<p onClick={!isLoading ? () => testLoginHandler() : null} className='btn btn-link'>
						Test Login
					</p>
				)}

				<button
					onClick={
						isLogin
							? async () => {
									const success = await loginChecker();
									success ? (closeModal(), setTextFields(defaultText)) : null;
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
						setShowPassword({ password: false, confirmPassword: false });
					}}
					className=' btn-link btn'
				>
					{isLogin ? "Don't have account?Sign up!" : 'Already have account?Log In!'}
				</button>
			</div>
		</div>
	);
};

export { AuthModalComponent };

const InputField = ({ labelText, type, name, onChange, value, hasError, onClick, passwordType }) => {
	return (
		<>
			<div className='flex-row align-items-center space-between'>
				<label htmlFor='email'>{labelText}</label>
				{labelText.toLowerCase().includes('password') &&
					(type === 'password' ? (
						<ShowPasswordEyeIcon className='header-icon' onClick={() => onClick(passwordType)} />
					) : (
						<HidePasswordEyeIcon className='header-icon' onClick={() => onClick(passwordType)} />
					))}
			</div>
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
