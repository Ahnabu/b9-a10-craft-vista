

/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { auth } from "../../firebase/firebase.config";
export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [state,setState]=useState(true)
    const EmailSingIn = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const provider = new GoogleAuthProvider();
    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const gitProvider = new GithubAuthProvider();

    const githubSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }

    const LogInEmail = async (email, password) => {
        try {
            setLoading(true);
            const result = await signInWithEmailAndPassword(email, password);
            setUser(result.user);
        } catch (error) {
            toast.error('something went wrong')
            return console.log(error);
        }
    }
    const ProfileUpdate = (name, photoURL) => {
        const navigate = useNavigate();
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photoURL}`
        })
            .then(result => {
                if (result.user) {
                    navigate('/')
                }
            })
            .catch((error) => { toast.error(error) });
    }
    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
                toast.success('successfully logged out')
            })

            .catch(error => toast.error(error));


    }
    <Toaster />
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('on auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unSubscribe()
        }
    }, []);
    const getWishList = () => {
        const storedBooks = localStorage.getItem('wish-list');

        return (JSON.parse(storedBooks) || [])
    }

    const wishList = id => {

        const readBooks = getWishList()
        const exist = readBooks.find(bookId => bookId == id);
        if (!exist) {
            readBooks.push(id);
            localStorage.setItem('wish-list', JSON.stringify(readBooks));
            toast.success('Successfully added to wishlist')
        }
        else {
            localStorage.removeItem('wish-list', JSON.stringify(readBooks))
        }
    }

    const info = {
        user,

        EmailSingIn,
        googleSingIn,
        githubSingIn,
        LogOut,
        LogInEmail,
        ProfileUpdate,
        loading,
        wishList,
        getWishList,
        state,
        setState,

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;