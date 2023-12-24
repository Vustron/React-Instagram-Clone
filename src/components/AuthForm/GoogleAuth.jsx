import { Flex, Image, Text } from '@chakra-ui/react';

const GoogleAuth = () => {
	return (
		<>
			{/* Login with Google */}
			<Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
				<Image src='/google.png' w={5} alt='Google logo' />
				<Text mx='2' color={'blue.500'}>
					Log in with Google
				</Text>
			</Flex>
		</>
	);
};

export default GoogleAuth;
