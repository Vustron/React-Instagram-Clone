import { useState } from 'react';
import { deleteObject, ref } from 'firebase/storage';
import { firestore, storage } from '../firebase/firebase';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import usePostStore from '../store/postStore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import useUserProfileStore from '../store/userProfileStore';

const useDeletePost = () => {
	const showToast = useShowToast();
	const [isDeleting, setIsDeleting] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const deletePost = usePostStore((state) => state.deletePost);
	const decrementPostCount = useUserProfileStore((state) => state.deletePost);

	const handleDeletePost = async (post) => {
		if (isDeleting) return;
		setIsDeleting(true);

		try {
			const imageRef = ref(storage, `posts/${post.id}`);
			await deleteObject(imageRef);

			const userRef = doc(firestore, 'users', authUser.uid);

			await deleteDoc(doc(firestore, 'posts', post.id));

			await updateDoc(userRef, {
				posts: arrayRemove(post.id),
			});

			deletePost(post.id);
			decrementPostCount(post.id);

			showToast('Success', 'Post deleted successfully', 'success');
		} catch (error) {
			console.log(error);
			showToast('Error', error.message, 'error');
		} finally {
			setIsDeleting(false);
		}
	};

	return { handleDeletePost, isDeleting };
};

export default useDeletePost;
