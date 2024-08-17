import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';
import Search from "@/page/search";


export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children, values }) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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
  // sign in with google 
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  // sign in with github
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

 // update user profile 
 const updateUser = (name,) => {
   setLoading(true);
   return updateProfile(auth.currentUser, {
     displayName: name,
   });
  };
  
  

 // logOut user 
 const logOut = () => {
  setLoading(true);
  return signOut(auth);
 }

  
  const field = () => {
    setLoading(true);
    return <Search values={values}/>
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
   user,
   loading,
   setLoading,
   createUser,
   signIn,
   logOut,
   updateUser,
   googleLogin,
   githubLogin,
   field,
 };

 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;