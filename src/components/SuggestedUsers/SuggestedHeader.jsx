import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import useLogout from '../../hooks/useLogout';
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';

const SuggestedHeader = () => {
	// init logout function
	const { handleLogOut, isLoggingOut } = useLogout();
	const authUser = useAuthStore((state) => state.user);

	if (!authUser) return null;
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
			<Flex alignItems={'center'} gap={2}>
				{/* user profile pic */}
				<Link to={`${authUser.username}`}>
					<Avatar size={'lg'} src={authUser.profilePicURL} />
				</Link>
				{/* user name */}
				<Link to={`${authUser.username}`}>
					<Text fontSize={13} fontWeight={'bold'}>
						{authUser.username}
					</Text>
				</Link>
			</Flex>
			<Button
				size={'xs'}
				background={'transparent'}
				fontSize={14}
				fontWeight={'medium'}
				color={'blue.400'}
				cursor={'pointer'}
				_hover={{
					background: 'transparent',
					color: 'white',
				}}
				onClick={handleLogOut}
				isLoading={isLoggingOut}
			>
				Logout
			</Button>
		</Flex>
	);
};

export default SuggestedHeader;
