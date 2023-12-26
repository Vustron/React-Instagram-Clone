import { useEffect, useState } from 'react';
import usePostStore from '../store/postStore';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useGetFeedPosts = () => {
	const [isFetching, setIsFetching] = useState(true);
	const { posts, setPosts } = usePostStore();
	const authUser = useAuthStore((state) => state.user);
	const showToast = useShowToast();
	const { setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getFeedPosts = async () => {
			setIsFetching(true);
			if (authUser.following.length === 0) {
				setIsFetching(false);
				setPosts([]);
				return;
			}

			const getFeedPostsQuery = query(
				collection(firestore, 'posts'),
				where('createdBy', 'in', authUser.following)
			);
			try {
				const querySnapshot = await getDocs(getFeedPostsQuery);
				const feedPosts = [];

				querySnapshot.forEach((doc) => {
					feedPosts.push({ id: doc.id, ...doc.data() });
				});

				feedPosts.sort((a, b) => b.createdAt - a.createdAt);
				setPosts(feedPosts);
			} catch (error) {
				console.log(error);
				showToast('Error', error.message, 'error');
			} finally {
				setIsFetching(false);
			}
		};
		if (authUser) getFeedPosts();
	}, [authUser, showToast, setPosts, setUserProfile]);

	return { isFetching, posts };
};

export default useGetFeedPosts;
