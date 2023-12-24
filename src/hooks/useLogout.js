import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useLogout = () => {
	// init logout
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	// init logout state
	const logoutUser = useAuthStore((state) => state.logout);
	// init toast
	const showToast = useShowToast();

	const handleLogOut = async () => {
		try {
			await signOut();
			localStorage.removeItem('user-info');
			console.log('Logged out');
			logoutUser();
		} catch (error) {
			console.log(error);
			showToast('Error', error.message, 'error');
		}
	};
	return { handleLogOut, isLoggingOut, error };
};

export default useLogout;
