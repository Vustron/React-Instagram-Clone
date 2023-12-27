import { useState } from 'react';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import usePostStore from '../store/postStore';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';

const usePostComment = () => {
	const showToast = useShowToast();
	const authUser = useAuthStore((state) => state.user);
	const [isCommenting, setIsCommenting] = useState(false);
	const addComment = usePostStore((state) => state.addComment);

	const handlePostComment = async (postId, comment) => {
		if (isCommenting) return;

		if (!authUser)
			return showToast('Error', 'You must be logged in to comment', 'error');

		if (!comment) return showToast('Error', 'You must type something', 'error');

		setIsCommenting(true);

		const newComment = {
			comment,
			createdAt: Date.now(),
			createdBy: authUser.uid,
			postId,
		};

		try {
			await updateDoc(doc(firestore, 'posts', postId), {
				comments: arrayUnion(newComment),
			});

			addComment(postId, newComment);
		} catch (error) {
			console.log(error);
			showToast('Error', error.message, 'error');
		} finally {
			setIsCommenting(false);
		}
	};

	return { isCommenting, handlePostComment };
};

export default usePostComment;
