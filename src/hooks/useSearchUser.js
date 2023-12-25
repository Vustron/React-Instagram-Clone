import { useState } from 'react';
import useShowToast from './useShowToast';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const showToast = useShowToast();

	const getUserProfile = async (username) => {
		setIsLoading(true);
		setUser(null);
		try {
			const searchQuery = query(
				collection(firestore, 'users'),
				where('username', '==', username)
			);

			const querySnapshot = await getDocs(searchQuery);

			if (querySnapshot.empty)
				return showToast('Error', 'User not found', 'error');

			querySnapshot.forEach((doc) => {
				setUser(doc.data());
			});
		} catch (error) {
			console.log(error);
			showToast('Error', error.message, 'error');
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;
