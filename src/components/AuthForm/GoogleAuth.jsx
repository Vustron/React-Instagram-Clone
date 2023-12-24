import { Flex, Image, Text } from '@chakra-ui/react';
import useGoogleProviderLogin from '../../hooks/useGoogleProviderLogin';

const GoogleAuth = ({ prefix }) => {
	// init google auth
	const { loading, error, handleGoogleAuth } = useGoogleProviderLogin();
	return (
		<>
			{/* Login with Google */}
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				cursor={'pointer'}
				onClick={handleGoogleAuth}
			>
				<Image src='/google.png' w={5} alt='Google logo' />
				<Text mx='2' color={'blue.500'}>
					{prefix} in with Google
				</Text>
			</Flex>
		</>
	);
};

export default GoogleAuth;
