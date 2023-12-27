import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import useFollowUser from '../../hooks/useFollowUser';
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';

const SuggestedUser = ({ user, setUser }) => {
	const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
	const authUser = useAuthStore((state) => state.user);

	const onFollowUser = async () => {
		await handleFollowUser();
		setUser({
			...user,
			followers: isFollowing
				? user.followers.filter((follower) => follower.uid !== authUser.uid)
				: [...user.followers, authUser],
		});
	};
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
			<Flex alignItems={'center'} gap={2}>
				{/* user profile pic */}
				<Link to={`/${user.username}`}>
					<Avatar src={user.profilePicURL} size={'md'} />
				</Link>
				<VStack spacing={2} alignItems={'start'}>
					{/* user name */}
					<Link to={`/${user.username}`}>
						<Box fontSize={12} fontWeight={'bold'}>
							{user.fullName}
						</Box>
					</Link>
					{/* user followers */}
					<Box fontSize={11} color={'gray.500'}>
						{user.followers.length} followers
					</Box>
				</VStack>
			</Flex>
			{authUser.uid !== user.uid && (
				<Button
					fontSize={13}
					bg={'transparent'}
					p={0}
					h={'max-content'}
					fontWeight={'medium'}
					color={'blue.400'}
					cursor={'pointer'}
					_hover={{
						color: 'white',
					}}
					onClick={onFollowUser}
					isLoading={isUpdating}
				>
					{isFollowing ? 'Unfollow' : 'Follow'}
				</Button>
			)}
		</Flex>
	);
};

export default SuggestedUser;
