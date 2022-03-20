import React from 'react';
import { useAuth } from '../../context/auth/auth-context';

const LoginCardModal = () => {
	const { isLogin, toggleIsLogin } = useAuth();
	return (
		<div className='modal-card'>
			<div className='flex-column align-items-center space-evenly'>
				<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
				<div className='input-group'>
					<label htmlFor='email'>Email Address</label>
					<input className='text-field' autoComplete='off' type='email' id='email' placeholder='johndoe@example.com' />
					<label htmlFor='password'>Password</label>
					<input className='text-field' type='password' id='password' placeholder='password' />
					{!isLogin && (
						<>
							<label htmlFor='confirm-password'>Confirm password</label>
							<input className=' text-field' type='password' id='confirm-password' placeholder='Confirm-password' />
						</>
					)}
				</div>
				<div className='remember-me-block'>
					<input type='checkbox' className='checkbox' name='remember me' id='remember-me' />
					<label className='margin-right remember-me-text' htmlFor='remember-me'>
						Remember me
					</label>
				</div>
				<button className='btn btn-products btn-primary'>{isLogin ? 'Login' : 'SignUp'}</button>
				<button onClick={toggleIsLogin} className=' btn-link btn'>
					{isLogin ? "Don't have account?Sign up!" : 'Already have account?Log In!'}
				</button>
			</div>
		</div>
	);
};

export { LoginCardModal };
