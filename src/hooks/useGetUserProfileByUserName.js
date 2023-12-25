import { useEffect, useState } from 'react';
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import useUserProfileStore from '../store/userProfileStore';

const useGetUserProfileByUserName = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	// init toast
	const showToast = useShowToast();
	//init get user profile state
	const { userProfile, setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
				const getUserProfileQuery = query(
					collection(firestore, 'users'),
					where('username', '==', username)
				);
				const querySnapshot = await getDocs(getUserProfileQuery);

				if (querySnapshot.empty) return setUserProfile(null);

				let userDoc;
				querySnapshot.forEach((doc) => {
					userDoc = doc.data();
				});

				setUserProfile(userDoc);
				console.log(userDoc);
			} catch (error) {
				console.log(error);
				showToast('Error', error.message, 'error');
			} finally {
				setIsLoading(false);
			}
		};

		getUserProfile();
	}, [setUserProfile, username, showToast]);

	return { isLoading, userProfile };
};

export default useGetUserProfileByUserName;
