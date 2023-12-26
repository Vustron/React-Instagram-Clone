import {
	Avatar,
	Box,
	Button,
	Flex,
	Skeleton,
	SkeletonCircle,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useFollowUser from '../../hooks/useFollowUser';

// post header
const PostHeader = ({ post, creatorProfile }) => {
	const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
		post.createdBy
	);

	return (
		<Flex
			justifyContent={'space-between'}
			alignItems={'center'}
			w={'full'}
			my={2}
		>
			<Flex alignItems={'center'} gap={2}>
				{/* user profile pic */}
				{creatorProfile ? (
					<Link to={`${creatorProfile.username}`}>
						<Avatar
							src={creatorProfile.profilePicURL}
							alt='user profile pic'
							size={'sm'}
						/>
					</Link>
				) : (
					<SkeletonCircle size={10} />
				)}

				<Flex fontSize={12} fontWeight={'bold'} gap={2}>
					{creatorProfile ? (
						<Link to={`${creatorProfile.username}`}>
							{creatorProfile.username}
						</Link>
					) : (
						<Skeleton w={'100px'} h={'10px'} />
					)}
					<Box color={'gray.500'}>• 1w</Box>
				</Flex>
			</Flex>
			<Box cursor={'pointer'}>
				<Button
					size={'xs'}
					fontSize={12}
					color={'blue.500'}
					fontWeight={'bold'}
					_hover={{
						color: 'white',
					}}
					transition={'0.2s ease-in-out'}
					bg={'transparent'}
					onClick={handleFollowUser}
					isLoading={isUpdating}
				>
					{isFollowing ? 'Unfollow' : 'Follow'}
				</Button>
			</Box>
		</Flex>
	);
};

export default PostHeader;
