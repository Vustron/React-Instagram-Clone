import { Box, Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import { useState } from 'react';
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from '../../assets/constants';

// post footer
const PostFooter = ({ username, isProfilePage }) => {
	// liked
	const [liked, setLiked] = useState(false);
	// Likes
	const [likes, setLikes] = useState(1000);
	// like handler
	const handleLike = () => {
		if (liked) {
			setLiked(false);
			setLikes(likes - 1);
		} else {
			setLiked(true);
			setLikes(likes + 1);
		}
	};

	return (
		<Box
			mb={10}
			marginTop={'auto'}
		>
			<Flex
				alignItems={'center'}
				gap={4}
				w={'full'}
				pt={0}
				mb={2}
				mt={4}
			>
				{/* like button */}
				<Box
					onClick={handleLike}
					cursor={'pointer'}
					fontSize={18}
				>
					{!liked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Box>

				{/* comments */}
				<Box
					cursor={'pointer'}
					fontSize={18}
				>
					<CommentLogo />
				</Box>
			</Flex>

			{/* no. of likes */}
			<Text
				fontWeight={600}
				fontSize={'sm'}
			>
				{likes} likes
			</Text>

			{!isProfilePage && (
				<>
					{/* user */}
					<Text
						fontSize={'sm'}
						fontWeight={700}
					>
						{username}{' '}
						<Text
							as={'span'}
							fontWeight={400}
						>
							Feeling Good
						</Text>
					</Text>

					{/* view all comments */}
					<Text
						fontSize={'sm'}
						color={'gray'}
					>
						View all 1,000 comments
					</Text>
				</>
			)}

			{/* comment */}
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
					>
						Post
					</Button>
				</InputGroup>
			</Flex>
		</Box>
	);
};

export default PostFooter;
