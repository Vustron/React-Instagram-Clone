import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

// user post
const FeedPost = ({ img, username, avatar }) => {
    return <>
        {/* post header */}
        <PostHeader username={username} avatar={avatar} />
        {/* post body */}
        <Box my={2} borderRadius={4} overflow={"hidden"}>
            <Image src={img} alt={username} />
        </Box>
        {/* post footer */}
        <PostFooter username={username} />
    </>;
};

export default FeedPost