import { create } from 'zustand';

const useUserProfileStore = create((set) => ({
	userProfile: null,
	setUserProfile: (userProfile) => set({ userProfile }),
	// addPost:()
}));

export default useUserProfileStore;
