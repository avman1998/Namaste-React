import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { db } from "../firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

const UserContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [cartData, setCartData] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const setName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const q = query(collection(db, `${user?.email}-Cart`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() });
      });

      setCartData(data);
    });
    return () => unsubscribe();
  }, []);
  console.log("cartData", cartData);
  return (
    <UserContext.Provider
      value={{ setName, createUser, user, cartData, logout, signIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
