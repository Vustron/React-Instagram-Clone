import { Box, Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from '../../assets/constants';
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';

// post footer
const PostFooter = ({ post, username, isProfilePage }) => {
	const authUser = useAuthStore((state) => state.user);
	const { handleLikePost, isLiked, isLiking, likes } = useLikePost(post);

	const { isCommenting, handlePostComment } = usePostComment();
	const [comment, setComment] = useState('');

	const handleSubmitComment = async () => {
		await handlePostComment(post.id, comment);
		setComment('');
	};

	const commentRef = useRef(null);

	return (
		<Box mb={10} marginTop={'auto'}>
			<Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
				{/* like button */}
				<Button
					onClick={handleLikePost}
					cursor={'pointer'}
					fontSize={18}
					isLoading={isLiking}
					bg={'transparent'}
				>
					{!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Button>

				{/* comments */}
				<Box
					cursor={'pointer'}
					fontSize={18}
					onClick={() => commentRef.current.focus()}
				>
					<CommentLogo />
				</Box>
			</Flex>

			{/* no. of likes */}
			<Text fontWeight={600} fontSize={'sm'}>
				{likes} likes
			</Text>

			{!isProfilePage && (
				<>
					{/* user */}
					<Text fontSize={'sm'} fontWeight={700}>
						{username}{' '}
						<Text as={'span'} fontWeight={400}>
							Feeling Good
						</Text>
					</Text>

					{/* view all comments */}
					<Text fontSize={'sm'} color={'gray'}>
						View all 1,000 comments
					</Text>
				</>
			)}

			{/* comment */}
			{authUser && (
				<Flex
					alignItems={'center'}
					gap={2}
					justifyContent={'space-between'}
					w={'full'}
				>
					<InputGroup>
						<Input
							variant={'flushed'}
							placeholder={'Add a commment...'}
							fontSize={14}
							onChange={(e) => setComment(e.target.value)}
							value={comment}
							ref={commentRef}
						/>
						<Button
							fontSize={14}
							color={'blue.500'}
							fontWeight={600}
							cursor={'pointer'}
							_hover={{
								color: 'white',
							}}
							bg={'transparent'}
							onClick={handleSubmitComment}
							isLoading={isCommenting}
						>
							Post
						</Button>
					</InputGroup>
				</Flex>
			)}
		</Box>
	);
};

export default PostFooter;
