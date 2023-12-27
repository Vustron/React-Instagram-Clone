import { Input, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
	// login state
	const [isLogin, setIsLogin] = useState(true);
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { loading, error, login } = useLogin();
	return (
		<>
			{/* Input email */}
			<Input
				placeholder='Email'
				fontSize={{ base: 13, md: 14, lg: 14 }}
				type='email'
				value={inputs.email}
				size={'sm'}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			{/* Input Password */}
			<Input
				placeholder='Password'
				fontSize={{ base: 13, md: 14, lg: 14 }}
				type='password'
				value={inputs.password}
				size={'sm'}
				onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
			/>

			{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}

			{/* Login Button */}
			<Button
				w={'full'}
				colorScheme='blue'
				size={'sm'}
				fontSize={{ base: 13, md: 14, lg: 14 }}
				isLoading={loading}
				onClick={() => login(inputs)}
			>
				Log in
			</Button>
		</>
	);
};

export default Login;
