import { Avatar, Flex, Text, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import { Link } from 'react-router-dom';
import { timeConverter } from '../../utils/timeConverter';

const Comment = ({ comment }) => {
	const { userProfile, isFetching } = useGetUserProfileById(comment.createdBy);

	if (isFetching) return <CommentSkeleton />;
	return (
		<Flex gap={4} alignItems='start'>
			<Link to={`/${userProfile.username}`}>
				<Avatar src={userProfile.profilePicURL} size='sm' />
			</Link>
			<Flex flexDir={'column'} alignItems={'start'}>
				<Flex flexDir={'row'}>
					<Link to={`/${userProfile.username}`}>
						<Text fontWeight={'bold'} fontSize={{ base: 11, md: 12 }}>
							{userProfile.username}
						</Text>
					</Link>
					<Text
						fontSize={{ base: 8, md: 10 }}
						color={'grey'}
						mt={'3px'}
						ml={'5px'}
					>
						{timeConverter(comment.createdAt)}
					</Text>
				</Flex>
				<Text
					fontSize={{ base: 11, md: 12 }}
					color={'gray.500'}
					alignSelf={'start'}
					mt={'3px'}
				>
					{comment.comment}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={'full'} alignItems={'center'}>
			<SkeletonCircle h={10} w={10} />
			<Flex gap={1} flexDir={'column'}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={100} />
			</Flex>
		</Flex>
	);
};
