import { useEffect, useState } from "react";
import { loginWithGoogle, logout, auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Login() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
		return () => unsubscribe(); // cleanup
	}, []);

	return (
		<div>
			{user ? (
				<>
					<img src={user.photoURL} alt="profile" className="rounded-full w-16 h-16" />
					<p>Welcome, {user.displayName}</p>
					<button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">
						Logout
					</button>
				</>
			) : (
				<button onClick={loginWithGoogle} className="px-4 py-2 bg-blue-500 text-white rounded">
					Login with Google
				</button>
			)}
		</div>
	);
}
