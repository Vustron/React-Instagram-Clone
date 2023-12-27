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
			<Flex flexDir={'column'} alignItems={'start'}>
				<Flex flexDir={'row'} alignItems={'row'}>
					<Link to={`/${userProfile.username}`}>
						<Text fontWeight={'bold'} fontSize={{ base: 11, md: 12 }}>
							{userProfile.username}
						</Text>
					</Link>
					<Text fontSize={{ base: 8, md: 10 }} color={'gray'} ml={2} mt={'1px'}>
						{timeConverter(post.createdAt)}
					</Text>
				</Flex>

				<Text
					fontSize={{ base: 11, md: 12 }}
					color={'gray.500'}
					alignSelf={'start'}
				>
					{post.caption}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Caption;
