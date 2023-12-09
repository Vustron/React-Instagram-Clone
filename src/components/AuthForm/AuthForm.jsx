import { AlertDialog, Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Auth form
const AuthForm = () => {
    // navigate home
    const navigate = useNavigate();
    // login state
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    // handle auth function
    const handleAuth = () => {
        // console.log("Inputs", inputs);
        if (!inputs.email || !inputs.password) {
            alert("Please fill all the fields");
            return;
        }
        navigate("/");
    };

    return <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                {/* Logo */}
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
                {/* Input email */}
                <Input
                    placeholder='Email'
                    fontSize={14}
                    type='email'
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs,email:e.target.value})}
                />
                {/* Input Password */}
                <Input
                    placeholder='Password'
                    fontSize={14}
                    type='password'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs,password:e.target.value})}
                />
                {/* Confirm Password */}
                {!isLogin ? (
                <Input
                    placeholder='Confirm Password'
                    fontSize={14}
                    type='password'
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
                />
                ) : null }
                {/* Login Button */}
                <Button w={"full"}  colorScheme='blue' size={"sm"} fontSize={14} onClick={handleAuth}>
                    {isLogin ? "Log in" : "Sign up"}
                </Button>
                {/* -------------------OR------------------- */}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                        <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                </Flex>

                {/* Login with Google */}
                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src='/google.png' w={5} alt='Google logo'/>
                    <Text mx="2" color={"blue.500"}>
                        Log in with Google
                    </Text>
                </Flex>
            </VStack>
        </Box>

        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                        {isLogin ? "Sign up" : "Log in"}
                    </Box>
            </Flex>
        </Box>
    </>;
};

export default AuthForm