import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm";


const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} pr={200}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>

                    {/* Left Side */}
                    <Box display={{ base: "none", md: "block" }}>
                        <Image src="/auth.png" h={600} alt='Phone img' />
                    </Box>

                    {/* Right Side */}
                    <VStack spacing={4} align={"stretch"}>
                        {/* Authform inputs */}
                        <AuthForm />
                        <Box textAlign={"center"}>
                            Get the app
                        </Box>
                        <Flex gap={5} justifyContent={"center"}>
                            <Image src='/playstore.png' h={"10"} alt='Playstore logo' />
                            <Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
};

export default AuthPage