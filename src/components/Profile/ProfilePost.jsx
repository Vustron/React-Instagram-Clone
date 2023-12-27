import {
	Avatar,
	Divider,
	Flex,
	GridItem,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	Button,
	ModalOverlay,
	Text,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Comment from '../Comment/Comment';
import PostFooter from '../FeedPosts/PostFooter';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';
import useShowToast from '../../hooks/useShowToast';
import useDeletePost from '../../hooks/useDeletePost';
import Caption from '../Comment/Caption';

const ProfilePost = ({ post }) => {
	// init modal
	const { isOpen, onOpen, onClose } = useDisclosure();
	const userProfile = useUserProfileStore((state) => state.userProfile);
	const authUser = useAuthStore((state) => state.user);
	const { isDeleting, handleDeletePost } = useDeletePost();
	const showToast = useShowToast();

	const handleDeletingPost = async () => {
		if (!window.confirm('Are you sure you want to delete this post?')) return;
		try {
			await handleDeletePost(post);
		} catch (error) {
			console.log(error);
			showToast('Error', error.message, 'error');
		}
	};

	return (
		<>
			<GridItem
				cursor={'pointer'}
				borderRadius={4}
				overflow={'hidden'}
				border={'1px solid'}
				borderColor={'whiteAlpha.300'}
				position={'relative'}
				aspectRatio={1 / 1}
				onClick={onOpen}
			>
				<Flex
					opacity={0}
					_hover={{ opacity: 1 }}
					position={'absolute'}
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg={'blackAlpha.700'}
					transition={'all 0.3s ease'}
					zIndex={1}
					justifyContent={'center'}
				>
					<Flex alignItems={'center'} justifyContent={'center'} gap={50}>
						{/* likes */}
						<Flex>
							<AiFillHeart size={20} />
							<Text fontWeight={'bold'} ml={2}>
								{post.likes.length}
							</Text>
						</Flex>
						{/* comments */}
						<Flex>
							<FaComment size={20} />
							<Text fontWeight={'bold'} ml={2}>
								{post.comments.length}
							</Text>
						</Flex>
					</Flex>
				</Flex>

				<Image
					src={post.imageURL}
					alt='profile post'
					w={'100%'}
					h={'100%'}
					objectFit={'cover'}
				/>
			</GridItem>

			{/* Modal */}
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered={true}
				size={{ base: 'md', md: '3xl' }}
				motionPreset='slideInBottom'
			>
				<ModalOverlay
					bg='blackAlpha.300'
					backdropFilter='blur(10px) hue-rotate(90deg)'
				/>
				<ModalContent
					bg={'black'}
					boxShadow={'xl'}
					border={'1px solid gray'}
					borderRadius={'1px'}
					overflowY='auto'
				>
					<ModalBody bg={'black'} pb={5}>
						<Flex
							gap={'4'}
							w={{ base: '90%', sm: '70%', md: 'full' }}
							mx={'auto'}
							maxH={'90vh'}
							minH={'50vh'}
							flexDir={{ base: 'column', md: 'row' }}
						>
							<Flex
								borderRadius={4}
								flex={1.5}
								justifyContent={'center'}
								alignItems={'center'}
							>
								<Image src={post.imageURL} alt='profile post' />
							</Flex>
							<Flex
								flex={1}
								flexDir={'column'}
								px={10}
								display={{ base: 'flex', md: 'flex' }}
								mt={{ base: '0', md: '20px', lg: '20px' }}
							>
								<Flex
									alignItems={'center'}
									justifyContent={'space-between'}
									mt={{ base: '0', md: '20px', lg: '20px' }}
								>
									{/* <Flex alignItems={'center'} gap={4}>
										<Avatar src={userProfile?.profilePicURL} size={'sm'} />
										<Text fontWeight={'bold'} fontSize={{ base: 11, md: 12 }}>
											{userProfile?.username}
										</Text>
									</Flex> */}
									{/* captions */}
									{post.caption && <Caption post={post} />}

									{authUser?.uid === userProfile?.uid && (
										<Button
											size={'sm'}
											bg={'transparent'}
											_hover={{
												bg: 'whiteAlpha.300',
												color: 'red.600',
											}}
											borderRadius={4}
											p={1}
											onClick={handleDeletingPost}
											isLoading={isDeleting}
										>
											<MdDelete size={20} cursor={'pointer'} />
										</Button>
									)}
								</Flex>
								<Divider my={4} bg={'grey.500'} />

								<VStack
									w={'full'}
									alignItems={'start'}
									maxH={'350px'}
									overflowY={'auto'}
								>
									{/* comments */}
									{post.comments.map((comment, index) => (
										<Comment key={index} comment={comment} />
									))}
								</VStack>

								<Divider my={4} bg={'gray.8000'} mt={'50px'} />
								<PostFooter isProfilePage={true} post={post} />
							</Flex>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ProfilePost;
