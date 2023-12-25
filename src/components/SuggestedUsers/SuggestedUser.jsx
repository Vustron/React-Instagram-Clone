import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SuggestedUser = ({ name, followers, avatar }) => {
	// is follow state
	const [isFollowed, setIsFollowed] = useState(false);

	return (
		<Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
			<Flex alignItems={'center'} gap={2}>
				{/* user profile pic */}
				<Avatar src={avatar} name={name} size={'md'} />
				<VStack spacing={2} alignItems={'start'}>
					{/* user name */}
					<Box fontSize={12} fontWeight={'bold'}>
						{name}
					</Box>
					{/* user followers */}
					<Box fontSize={11} color={'gray.500'}>
						{followers} followers
					</Box>
				</VStack>
			</Flex>
			<Button
				fontSize={13}
				bg={'transparent'}
				p={0}
				h={'max-content'}
				fontWeight={'medium'}
				color={'blue.400'}
				cursor={'pointer'}
				_hover={{
					color: 'white',
				}}
				onClick={() => setIsFollowed(!isFollowed)}
			>
				{isFollowed ? 'Unfollow' : 'Follow'}
			</Button>
		</Flex>
	);
};

export default SuggestedUser;
