import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Login = () => {
	// login state
	const [isLogin, setIsLogin] = useState(true);
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	return (
		<>
			{/* Input email */}
			<Input
				placeholder='Email'
				fontSize={14}
				type='email'
				value={inputs.email}
				size={'sm'}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			{/* Input Password */}
			<Input
				placeholder='Password'
				fontSize={14}
				type='password'
				value={inputs.password}
				size={'sm'}
				onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
			/>
			{/* Login Button */}
			<Button
				w={'full'}
				colorScheme='blue'
				size={'sm'}
				fontSize={14}
				// onClick={handleAuth}
			>
				Log in
			</Button>
		</>
	);
};

export default Login;
