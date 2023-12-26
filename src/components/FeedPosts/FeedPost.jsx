import { Box, Image } from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';

// user post
const FeedPost = ({ post }) => {
	const { userProfile } = useGetUserProfileById(post.createdBy);

	return (
		<>
			{/* post header */}
			<PostHeader post={post} creatorProfile={userProfile} />
			{/* post body */}
			<Box my={2} borderRadius={4} overflow={'hidden'}>
				<Image src={post.imageURL} alt={'Feed Post Image'} />
			</Box>
			{/* post footer */}
			<PostFooter post={post} creatorProfile={userProfile} />
		</>
	);
};

export default FeedPost;
