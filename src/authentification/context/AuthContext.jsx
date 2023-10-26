import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signupFn(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signinFn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logoutFn() {
    return signOut(auth);
  }
  function resetPasswordFn(email) {
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signupFn,
    signinFn,
    logoutFn,
    resetPasswordFn,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
