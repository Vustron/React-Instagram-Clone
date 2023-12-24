import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useShowToast from './useShowToast';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

const useGoogleProviderLogin = () => {
	// init toast
	const showToast = useShowToast();

	// init google login
	const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);

	// init user state
	const loginUser = useAuthStore((state) => state.login);

	const handleGoogleAuth = async () => {
		try {
			const newUser = await signInWithGoogle();
			if (!newUser && error) {
				showToast('Error', error.message, 'error');
				return;
			}

			// check user
			const userRef = doc(firestore, 'users', newUser.user.uid);
			const userSnap = await getDoc(userRef);

			if (userSnap.exists()) {
				// login
				const userDoc = userSnap.data();
				localStorage.setItem('user-info', JSON.stringify(userDoc));
				loginUser(userDoc);
			} else {
				// signup
				const userDoc = {
					uid: newUser.user.uid,
					email: newUser.user.email,
					username: newUser.user.email.split('@')[0],
					fullName: newUser.user.displayName,
					bio: '',
					profilePicURL: newUser.user.photoURL,
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
			console.log(error);
			showToast('Error', error.message, 'error');
		}
	};
	return { error, handleGoogleAuth };
};

export default useGoogleProviderLogin;
