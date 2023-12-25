import {
	Avatar,
	AvatarGroup,
	Button,
	Flex,
	Text,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';
import EditProfile from './EditProfile';
import useFollowUser from '../../hooks/useFollowUser';

const ProfileHeader = () => {
	// init profile state
	const { userProfile } = useUserProfileStore();
	const authUser = useAuthStore((state) => state.user);
	const visitingOwnProfileAndAuth =
		authUser && authUser.username === userProfile.username;
	const visitingAnotherProfileAndAuth =
		authUser && authUser.username !== userProfile.username;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
		userProfile?.uid
	);

	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: 'column', sm: 'row' }}
		>
			{/* avatar group */}
			<AvatarGroup
				size={{ base: 'xl', md: '2xl' }}
				justifySelf={'center'}
				alignSelf={'self-start'}
				mx={'auto'}
			>
				{/* user avatar */}
				<Avatar src={userProfile.profilePicURL} alt='user profile logo' />
			</AvatarGroup>

			<VStack alignItems={'center'} gap={2} mx={'auto'} flex={1}>
				<Flex
					gap={4}
					direction={{ base: 'column', sm: 'row' }}
					justifyContent={{ base: 'center', sm: 'flex-start' }}
					alignItems={'center'}
					w={'full'}
				>
					{/* username */}
					<Text fontSize={{ base: 'sm', md: 'lg' }}>
						{userProfile.username}
					</Text>

					{visitingOwnProfileAndAuth && (
						<Flex gap={4} alignItems={'center'} justifyContent={'center'}>
							<Button
								bg={'white'}
								color={'black'}
								_hover={{ bg: 'whiteAlpha.800' }}
								size={{ base: 'xs', md: 'sm' }}
								onClick={onOpen}
							>
								Edit Profile
							</Button>
						</Flex>
					)}

					{visitingAnotherProfileAndAuth && (
						<Flex gap={4} alignItems={'center'} justifyContent={'center'}>
							<Button
								bg={'blue.500'}
								color={'white'}
								_hover={{ bg: 'blue.600' }}
								size={{ base: 'xs', md: 'sm' }}
								onClick={handleFollowUser}
								isLoading={isUpdating}
							>
								{isFollowing ? 'Unfollow' : 'Follow'}
							</Button>
						</Flex>
					)}
				</Flex>

				{/* posts and followers */}
				<Flex
					alignSelf={'self-start'}
					alignItems={'center'}
					gap={{ base: 2, sm: 4 }}
				>
					{/* posts */}
					<Text fontSize={{ base: 'xs', md: 'sm' }}>
						<Text as='span' fontWeight={'bold'} mr={1}>
							{userProfile.posts.length}
						</Text>
						Posts
					</Text>

					{/* followers */}
					<Text fontSize={{ base: 'xs', md: 'sm' }}>
						<Text as='span' fontWeight={'bold'} mr={1}>
							{userProfile.followers.length}
						</Text>
						Followers
					</Text>

					{/* following */}
					<Text fontSize={{ base: 'xs', md: 'sm' }}>
						<Text as='span' fontWeight={'bold'} mr={1}>
							{userProfile.following.length}
						</Text>
						Following
					</Text>
				</Flex>
				{/* user name */}
				<Flex alignSelf={'self-start'} alignItems={'center'} gap={4}>
					<Text fontSize={'sm'} fontWeight={'bold'}>
						{userProfile.fullName}
					</Text>
				</Flex>
				{/* user bio */}
				<Flex alignSelf={'self-start'} alignItems={'center'} gap={4}>
					<Text fontSize={'sm'}>{userProfile.bio}</Text>
				</Flex>
			</VStack>
			{isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
		</Flex>
	);
};

export default ProfileHeader;
