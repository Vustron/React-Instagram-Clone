import {
	Box,
	Container,
	Flex,
	Image,
	Skeleton,
	SkeletonCircle,
	Text,
	VStack,
} from '@chakra-ui/react';
import FeedPost from './FeedPost';
import useGetFeedPosts from '../../hooks/useGetFeedPosts';

// FeedPosts
const FeedPosts = () => {
	const { isFetching, posts } = useGetFeedPosts();
	return (
		<Container maxW={'container.sm'} py={10} px={2}>
			{/* Skeleton placeholder */}
			{isFetching &&
				[0, 1, 2].map((_, index) => (
					<VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
						<Flex gap={2}>
							<SkeletonCircle size={10} />
							<VStack gap={2} alignItems={'flex-start'}>
								<Skeleton height={'10px'} w={'200px'} />
								<Skeleton height={'10px'} w={'200px'} />
							</VStack>
						</Flex>
						<Skeleton w={'full'}>
							<Box h={'400px'}>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{!isFetching &&
				posts.length > 0 &&
				posts.map((post) => <FeedPost key={post.id} post={post} />)}
			{!isFetching && posts.length === 0 && (
				<>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Text fontSize={'md'} color={'whiteAlpha.800'}>
							Dayuum, Looks like you don't have any friends 😢
						</Text>
					</Flex>
				</>
			)}
		</Container>
	);
};

export default FeedPosts;
