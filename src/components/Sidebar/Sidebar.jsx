import { Box, Flex, Link, Tooltip, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants';

import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import SidebarItems from './SidebarItems';

// sidebar
const Sidebar = () => {
	// init logout function
	const { handleLogOut, isLoggingOut } = useLogout();

	return (
		<Box
			height={'100vh'}
			borderRight={'1px solid'}
			borderColor={'whiteAlpha.300'}
			py={8}
			position={'sticky'}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={'column'} gap={10} w={'full'} height={'full'}>
				{/* instagram logo */}
				<Link
					to={'/'}
					as={RouterLink}
					pl={2}
					display={{ base: 'none', md: 'block' }}
					cursor={'pointer'}
					alignItems={'center'}
					justifyContent={'center'}
					ml={{ md: '35px', lg: '35px' }}
				>
					<InstagramLogo />
				</Link>
				{/* instagram mobile logo */}
				<Tooltip
					hasArrow
					label={'Instagram'}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: 'block', md: 'none' }}
				>
					<Link
						to={'/'}
						as={RouterLink}
						p={2}
						display={{ base: 'block', md: 'none' }}
						cursor={'pointer'}
						borderRadius={6}
						_hover={{
							bg: 'whiteAlpha.200',
						}}
						w={10}
						alignItems={'center'}
						justifyContent={'center'}
						ml={{ base: 1, md: 0, lg: 0 }}
					>
						<InstagramMobileLogo />
					</Link>
				</Tooltip>
				{/* sidebaritems */}
				<Flex direction={'column'} gap={5} cursor={'pointer'}>
					<SidebarItems />
				</Flex>
				{/* Logout */}
				<Tooltip
					hasArrow
					label={'Logout'}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: 'block', md: 'none' }}
				>
					<Flex
						onClick={handleLogOut}
						gap={4}
						_hover={{ bg: 'whiteAlpha.400' }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: 'full' }}
						justifyContent={{ base: 'center', md: 'flex-start' }}
						alignItems={'center'}
						m={1}
						mt={'auto'}
					>
						<BiLogOut size={25} />
						<Button
							display={{ base: 'none', md: 'block' }}
							variant={'ghost'}
							_hover={{ bg: 'transparent' }}
							isLoading={isLoggingOut}
							ml={{ base: 1, md: 0, lg: 0 }}
						>
							Logout
						</Button>
					</Flex>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;
