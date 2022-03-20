import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const toggleIsLogin = () => {
		setIsLogin((prevIsLogin) => !prevIsLogin);
	};

	return <AuthContext.Provider value={{ isLogin, toggleIsLogin }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
