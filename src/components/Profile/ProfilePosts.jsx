import { Grid, Skeleton, VStack, Box, Flex, Text } from '@chakra-ui/react';
import ProfilePost from './ProfilePost';
import useGetUserPosts from '../../hooks/useGetUserPosts';

const ProfilePosts = () => {
	const { isLoading, posts } = useGetUserPosts();
	const noPostsFound = !isLoading && posts.length === 0;
	if (noPostsFound) return <NoPostFound />;

	return (
		<Grid
			templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
			gap={1}
			columnGap={1}
		>
			{isLoading &&
				[0, 1, 2].map((_, index) => (
					<VStack key={index} alignItems={'flex-start'} gap={4}>
						<Skeleton w={'full'}>
							<Box h='300px'>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{!isLoading && (
				<>
					{/* profile posts */}
					{posts.map((post) => (
						<ProfilePost key={post.id} post={post} />
					))}
				</>
			)}
		</Grid>
	);
};

export default ProfilePosts;

const NoPostFound = () => {
	return (
		<Flex flexDir={'column'} textAlign={'center'} mx={'auto'} mt={10}>
			<Text fontSize={'2xl'}>No Posts Found 😟</Text>
		</Flex>
	);
};
