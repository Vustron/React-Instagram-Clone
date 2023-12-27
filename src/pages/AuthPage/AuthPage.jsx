import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
	return (
		<Flex
			minH={'100vh'}
			justifyContent={'center'}
			alignItems={'center'}
			px={4}
			pr={200}
		>
			<Container maxW={'container.md'} padding={1} ml={'180px'}>
				<Flex
					direction={{ base: 'column', md: 'row', lg: 'row' }}
					justifyContent={'center'}
					alignItems={{ base: 'center', md: 'center', lg: 'center' }}
					gap={10}
				>
					{/* Only display the image on larger screens */}
					<Box
						display={{ base: 'none', md: 'none', lg: 'block' }}
						textAlign={{ base: 'center', md: 'left' }}
					>
						<Image
							src='/auth.png'
							maxH={{ lg: '500px' }}
							maxW='100%'
							objectFit='cover'
							alt='Phone img'
						/>
					</Box>

					{/* Display AuthForm on all screens */}
					<VStack
						spacing={4}
						align={{ base: 'center', md: 'center' }}
						w={'250px'}
					>
						{/* Authform inputs with added margin on small screens */}
						<AuthForm marginLeft={{ base: 'auto', md: '0' }} />
						<Box textAlign={'center'} fontSize={{ base: 13, md: 13, lg: 13 }}>
							Get the app
						</Box>
						<Flex gap={5} justifyContent={'center'}>
							<Image src='/playstore.png' h={'10'} alt='Playstore logo' />
							<Image src='/microsoft.png' h={'10'} alt='Microsoft logo' />
						</Flex>
					</VStack>
				</Flex>
			</Container>
		</Flex>
	);
};

export default AuthPage;
