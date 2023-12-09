import { Avatar, Box, Center, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
    CreatePostLogo,
    InstagramLogo,
    InstagramMobileLogo,
    NotificationsLogo,
    SearchLogo
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

// sidebar
const Sidebar = () => {
    // sidebar items
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/",
        },
        {
            icon: <SearchLogo />,
            text: "Search",
        },
        {
            icon: <NotificationsLogo />,
            text: "Notification",
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            icon: <Avatar size={"sm"} name='Vustron Vustronus' src="/profilepic.png" />,
            text: "Profile",
            link: "/asaprogrammer",
        },
    ];

    return <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 2, md: 4 }}>

        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
            {/* instagram logo */}
            <Link
                to={"/"}
                as={RouterLink}
                pl={2}
                display={{ base: "none", md: "block" }}
                cursor={"pointer"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <InstagramLogo />
            </Link>
            {/* instagram mobile logo */}
            <Link
                to={"/"}
                as={RouterLink}
                p={2}
                display={{ base: "block", md: "none" }}
                cursor={"pointer"}
                borderRadius={6}
                _hover={{
                    bg: "whiteAlpha.200"
                }}
                w={10}
                alignItems={"center"}
                justifyContent={"center"}
                m={1}
            >
                <InstagramMobileLogo />
            </Link>
            {/* sidebaritems */}
            <Flex direction={"column"} gap={5} cursor={"pointer"} >
                {sidebarItems.map((item, index) => (
                    <Tooltip
                        key={index}
                        hasArrow
                        label={item.text}
                        placement="right"
                        ml={1}
                        openDelay={500}
                        display={{ base: "block", md: "none" }}
                    >
                        <Link
                            display={"flex"}
                            to={item.link || null}
                            as={RouterLink}
                            gap={4}
                            _hover={{ bg: "whiteAlpha.400" }}
                            borderRadius={6}
                            p={2}
                            w={{ base: 10, md: "full" }}
                            justifyContent={{ base: "center", md: "flex-start" }}
                            alignItems={"center"}
                            m={1}
                        >
                            {item.icon}
                            <Box display={{ base: "none", md: "block" }}>
                                {item.text}
                            </Box>
                        </Link>
                    </Tooltip>
                ))}
            </Flex>
            {/* Logout */}
            <Tooltip
                hasArrow
                label={"Logout"}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Link
                    display={"flex"}
                    to={"/auth"}
                    as={RouterLink}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    alignItems={"center"}
                    m={1}
                    mt={"auto"}
                >
                    <BiLogOut size={25} />
                    <Box display={{ base: "none", md: "block" }}>
                        Logout
                    </Box>
                </Link>
            </Tooltip>
        </Flex>
    </Box>;
};

export default Sidebar