import { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase/firebase";

export interface AuthContextType {
  loggedIn: boolean;
  image: string;
  signInWithGoogle: () => void;
  userSignOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  image: "",
  signInWithGoogle: () => {},
  userSignOut: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setAuthUser(user);
        setImage(user.photoURL); // Use "user" instead of "authenticatedUser"
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => listen(); // Move the return statement outside of the callback
  }, [loggedIn]);

  // signIn with Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setImage(result.user.photoURL); // Use "result.user" instead of "authenticatedUser"
        toast.success("Sign in successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Can't sign you in. Redirecting...");
      });
  };

  // sign out
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((error) => toast.error("Unable to sign out"));
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        image,
        signInWithGoogle,
        userSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
