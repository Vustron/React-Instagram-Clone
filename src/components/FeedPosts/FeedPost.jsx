import {
	Box,
	Flex,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';

// user post
const FeedPost = ({ post }) => {
	const { userProfile } = useGetUserProfileById(post.createdBy);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			{/* post header */}
			<PostHeader post={post} creatorProfile={userProfile} />
			{/* post body */}
			<Box my={2} borderRadius={4} overflow={'hidden'} onClick={onOpen}>
				<Image
					src={post.imageURL}
					alt={'Feed Post Image'}
					w={'100%'}
					h={'100%'}
					objectFit={'cover'}
				/>
			</Box>
			{/* post footer */}
			<PostFooter post={post} creatorProfile={userProfile} />

			{/* Modal */}
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered={true}
				size={{ base: 'sm', md: 'md' }}
				motionPreset='slideInBottom'
			>
				<ModalOverlay
					bg='blackAlpha.300'
					backdropFilter='blur(10px) hue-rotate(90deg)'
				/>

				<ModalContent
					bg={'black'}
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
						>
							<Flex
								borderRadius={4}
								overflow={'hidden'}
								// border={'1px solid'}
								// borderColor={'whiteAlpha.300'}
								flex={1.5}
								justifyContent={'center'}
								alignItems={'center'}
							>
								<Image src={post.imageURL} alt='profile post' />
							</Flex>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default FeedPost;
