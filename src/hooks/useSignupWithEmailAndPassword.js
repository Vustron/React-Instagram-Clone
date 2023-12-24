import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where,
} from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignupWithEmailAndPassword = () => {
	// init create user wit email & password
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	// init toast
	const showToast = useShowToast();

	// init user state
	const loginUser = useAuthStore((state) => state.login);
	// const logoutUser = useAuthStore((state) => state.logout);

	// init signup
	const signup = async (inputs) => {
		console.log('inputs:', inputs);
		// check for empty inputs
		if (
			!inputs.email ||
			!inputs.username ||
			!inputs.fullName ||
			!inputs.password
		) {
			showToast('Error', 'Please fill all the fields', 'error');
			return;
		}

		//check for duplicate username
		const usersRef = collection(firestore, 'users');
		const userCheckQuery = query(
			usersRef,
			where('username', '==', inputs.username)
		);
		const querySnapshot = await getDocs(userCheckQuery);
		if (!querySnapshot.empty) {
			showToast('Error', 'Username already exists', 'error');
			return;
		}
		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			);
			if (!newUser && error) {
				showToast('Error', error.message, 'error');
				return;
			}
			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.username,
					fullName: inputs.fullName,
					bio: '',
					profilePicURL: '',
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};

				await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
				localStorage.setItem('user-info', JSON.stringify(userDoc));
				loginUser(userDoc);
			}
		} catch (error) {
			showToast('Error', error.message, 'error');
		}
	};

	return { loading, error, signup };
};

export default useSignupWithEmailAndPassword;
