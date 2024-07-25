import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);


 // create user
 const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 }

 // sign in user 
 const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 }

 // update user profile 
 const updateUser = (displayName, photoURL) => {
   setLoading(true);
   return updateProfile(auth.currentUser, {
     displayName: displayName,
     photoURL: photoURL,
   });
 };

 // logOut user 
 const logOut = () => {
  setLoading(true);
  return signOut(auth);
 }


 // observer
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
   setUser(currentUser);
   setLoading(false);
   console.log('currentUser ==>>', currentUser);
  })
  return () => unsubscribe();
 },[])

 const authInfo = {
user, loading, setLoading,createUser, signIn, logOut, updateUser, 
 };

 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;