import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"


const ProfileHeader = () => {
    return (
        <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>

            {/* avatar group */}
            <AvatarGroup
                size={{ base: 'xl', md: '2xl' }}
                justifySelf={'center'}
                alignSelf={'self-start'}
                mx={'auto'}
            >
                {/* user avatar */}
                <Avatar name='Vustron Vustronus' src='/profilepic.png' alt='Vustron Vustronus logo' />
            </AvatarGroup>

            <VStack alignItems={'center'} gap={2} mx={'auto'} flex={1}>
                <Flex
                    gap={4}
                    direction={{ base: 'column', sm: 'row' }}
                    justifyContent={{ base: 'center', sm: 'flex-start' }}
                    alignItems={'center'}
                    w={'full'}
                >
                    {/* username */}
                    <Text fontSize={{ base: 'sm', md: 'lg' }}>
                        vustron_vustronus
                    </Text>

                    {/* edit button */}
                    <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
                        <Button bg={'white'} color={'black'} _hover={{ bg: 'whiteAlpha.800' }} size={{ base: 'xs', md: 'sm' }}>
                            Edit Profile
                        </Button>
                    </Flex>
                </Flex>

                {/* posts and followers */}
                <Flex alignSelf={'self-start'} alignItems={'center'} gap={{ base: 2, sm: 4 }} >

                    {/* posts */}
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as='span' fontWeight={'bold'} mr={1}>4</Text>
                        Posts
                    </Text>

                    {/* followers */}
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as='span' fontWeight={'bold'} mr={1}>420</Text>
                        Followers
                    </Text>

                    {/* following */}
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as='span' fontWeight={'bold'} mr={1}>69</Text>
                        Following
                    </Text>
                </Flex>
                {/* user name */}
                <Flex alignSelf={'self-start'} alignItems={'center'} gap={4}>
                    <Text fontSize={'sm'} fontWeight={'bold'}>Vustron Vustronus</Text>
                </Flex>
                {/* user bio */}
                <Flex alignSelf={'self-start'} alignItems={'center'} gap={4}>
                    <Text fontSize={'sm'} >Entertainment Enthusiast</Text>
                </Flex>

            </VStack>
        </Flex>
    );
};


export default ProfileHeader
