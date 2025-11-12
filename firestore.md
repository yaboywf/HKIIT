# Core functions
import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from "firebase/firestore";

# Add a new document - addDoc()
- Automatically generates a random ID.

<pre>
const userRef = collection(db, "users");
await addDoc(userRef, {
  name: "Mariana",
  email: "mariana@example.com",
  createdAt: new Date(),
});
</pre>

# Set (create or overwrite) document - setDoc()
- Writes to a known document path — replaces existing content by default.

<pre>
const docRef = doc(db, "users", "user123");
await setDoc(docRef, {
  name: "Mariana",
  country: "Singapore",
});
</pre>

- To merge with existing fields (update without overwriting):
<pre>await setDoc(docRef, { lastLogin: new Date() }, { merge: true });</pre>

# Get a single document - getDoc()
- Fetch a specific document by reference.

<pre>
const docRef = doc(db, "users", "user123");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("User data:", docSnap.data());
} else {
  console.log("No such document!");
}
</pre>

# Get all documents in a collection - getDocs()
- Reads all documents in a collection or query.

<pre>
const colRef = collection(db, "users");
const snapshot = await getDocs(colRef);

snapshot.forEach((doc) => {
  console.log(doc.id, "=>", doc.data());
});
</pre>

# Filter and query documents - query() + where() + orderBy() + limit()
<pre>
const usersRef = collection(db, "users");
const q = query(
  usersRef,
  where("country", "==", "Singapore"),
  orderBy("lastLogin", "desc"),
  limit(5)
);

const snapshot = await getDocs(q);
snapshot.forEach((doc) => console.log(doc.data()));
</pre>

# Update existing fields - updateDoc()
<pre>
const userRef = doc(db, "users", "user123");
await updateDoc(userRef, {
  country: "Hong Kong",
  lastLogin: new Date(),
});
</pre>

# Delete a document - deleteDoc()
<pre>
await deleteDoc(doc(db, "users", "user123"));
</pre>

# Real-time updates - onSnapshot()
- Listen for live changes in a collection or document.

<pre>
import { onSnapshot } from "firebase/firestore";

const q = query(collection(db, "users"));
onSnapshot(q, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log("Updated:", doc.data());
  });
});
</pre>