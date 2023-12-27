import { Slide } from '@chakra-ui/react';
import CreatePost from './CreatePost';
import Home from './Home';
import Notifications from './Notifications';
import ProfileLink from './ProfileLink';
import Search from './Search';

const SidebarItems = () => {
	return (
		<>
			<Home />
			{/* search */}
			<Search />
			{/* notifications */}
			<Notifications />
			{/* create post */}
			<CreatePost />
			{/* profile link */}
			<ProfileLink />
		</>
	);
};

export default SidebarItems;
