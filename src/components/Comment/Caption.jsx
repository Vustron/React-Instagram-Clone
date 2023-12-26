import { Avatar, Flex, Text, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { timeConverter } from '../../utils/timeConverter';
import useUserProfileStore from '../../store/userProfileStore';

const Caption = ({ post }) => {
	const userProfile = useUserProfileStore((state) => state.userProfile);
	return (
		<Flex gap={4}>
			<Link to={`/${userProfile.username}`}>
				<Avatar src={userProfile.profilePicURL} size={'sm'} />
			</Link>
			<Flex flexDir={'column'}>
				<Flex gap={2} alignItems={'center'}>
					<Link to={`/${userProfile.username}`}>
						<Text fontWeight={'bold'} fontSize={12}>
							{userProfile.username}
						</Text>
					</Link>
					<Text fontSize={14} color={'gray.500'}>
						{post.caption}
					</Text>
				</Flex>
				<Text fontSize={12} color={'gray'}>
					{timeConverter(post.createdAt)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Caption;
