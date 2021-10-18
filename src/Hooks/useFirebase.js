import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../pages/Login/Firebase/firebase.init";

firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);

    const auth = getAuth();

    const googleSignIn = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsloading(false));
    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        isLoading,
        googleSignIn,
        logOut
    }
};

export default useFirebase;