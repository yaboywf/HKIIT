// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDQxVHfbJEG5uyR9rgtexafjsLKYgMRt2Q",
	authDomain: "hkiit-b4aa4.firebaseapp.com",
	projectId: "hkiit-b4aa4",
	storageBucket: "hkiit-b4aa4.firebasestorage.app",
	messagingSenderId: "508267777243",
	appId: "1:508267777243:web:d7129502a4d9119739d0fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth & Provider
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Helper functions
export const loginWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		return result.user;
	} catch (error) {
		console.error("Login failed:", error);
	}
};

export const logout = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		console.error("Logout failed:", error);
	}
};

// Optional (default export not required but fine)
export default app;
