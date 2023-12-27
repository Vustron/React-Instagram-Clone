import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	Alert,
	AlertIcon,
	Button,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import useSignupWithEmailAndPassword from '../../hooks/useSignupWithEmailAndPassword.js';

const Signup = () => {
	const [inputs, setInputs] = useState({
		email: '',
		username: '',
		fullName: '',
		password: '',
	});
	// password state
	const [showPassword, setShowPassword] = useState(false);
	const { loading, error, signup } = useSignupWithEmailAndPassword();

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
			{/* Input username */}
			<Input
				placeholder='Username'
				fontSize={{ base: 13, md: 14, lg: 14 }}
				type='text'
				value={inputs.username}
				size={'sm'}
				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
			/>
			{/* Input fullname */}
			<Input
				placeholder='Full Name'
				fontSize={{ base: 13, md: 14, lg: 14 }}
				type='text'
				value={inputs.fullName}
				size={'sm'}
				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
			/>

			<InputGroup>
				{/* Input Password */}
				<Input
					placeholder='Password'
					fontSize={{ base: 13, md: 14, lg: 14 }}
					type={showPassword ? 'text' : 'password'}
					value={inputs.password}
					size={'sm'}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<InputRightElement h={'full'}>
					<Button
						variant={'ghost'}
						size={'sm'}
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>

			{/* error message */}
			{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}

			{/* Signup Button */}
			<Button
				w={'full'}
				colorScheme='blue'
				size={'sm'}
				fontSize={{ base: 13, md: 14, lg: 14 }}
				isLoading={loading}
				onClick={() => signup(inputs)}
			>
				Sign Up
			</Button>
		</>
	);
};

export default Signup;
