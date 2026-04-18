'use client'

import React, { createContext, useEffect, useState, useContext } from "react";
import { 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  User
} from "firebase/auth";
import auth from "./firebase.config";

// Interface for the Auth Context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  handleRegister: (email: string, pass: string) => Promise<any>;
  handleLogin: (email: string, pass: string) => Promise<any>;
  handleLogout: () => Promise<void>;
  handleGoogle: () => Promise<any>;
  resetPass: (email: string) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  opar: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Register new user
  const handleRegister = (email: string, pass: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Login existing user
  const handleLogin = (email: string, pass: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // Google login
  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Password reset
  const resetPass = (email: string) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const opar = 'opar';

  // Keep user logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogle,
    resetPass,
    setUser,
    opar,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context


export default AuthProvider;
