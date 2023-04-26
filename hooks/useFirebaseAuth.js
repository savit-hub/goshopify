// import app, { auth, googleProvider } from "@/config/App";
// import { useState, useEffect } from "react";

// const formatAuthUser = (user) => ({
//   uid: user.uid,
//   email: user.email,
// });

// export default function useFirebaseAuth() {
//   const [authUser, setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const authStateChanged = async (authState) => {
//     if (!authState) {
//       setAuthUser(null);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     var formattedUser = formatAuthUser(authState);
//     setAuthUser(formattedUser);
//     setLoading(false);
//   };

//   const signInWithEmailAndPassword = (email, password) =>
//     auth.signInWithEmailAndPassword(email, password);

//   const createUserWithEmailAndPassword = (email, password) =>
//     auth.createUserWithEmailAndPassword(email, password);

//   const signOut = () => auth.signOut();

//   const signInWithGoogle = () => {
//     auth.signInWithPopup(googleProvider);
//   };
//   // listen for Firebase state change
//   useEffect(() => {
//     const unsubscribe = app.auth().onAuthStateChanged(authStateChanged);
//     return () => unsubscribe();
//   }, []);

//   return {
//     authUser,
//     loading,
//     signInWithEmailAndPassword,
//     signInWithGoogle,
//     createUserWithEmailAndPassword,
//     signOut,
//   };
// }
