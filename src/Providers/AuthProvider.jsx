import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
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
user, loading, setLoading,createUser, signIn, logOut, updateUser, googleLogin, githubLogin
 };

 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;