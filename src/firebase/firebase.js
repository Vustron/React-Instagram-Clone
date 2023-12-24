import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyB6oMb8WrRgwK4Q734Bs7X44JMtrEoYPC8',
	authDomain: 'insta-clone-4205f.firebaseapp.com',
	projectId: 'insta-clone-4205f',
	storageBucket: 'insta-clone-4205f.appspot.com',
	messagingSenderId: '50493037317',
	appId: '1:50493037317:web:373128a17d41c073c9f56c',
	measurementId: 'G-W6E3QM568W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
