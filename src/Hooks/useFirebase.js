import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../pages/Login/Firebase/firebase.init";

firebaseInit();

const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);

    const [error, setError] = useState("");


    const googleSignIn = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setError("")
            })
            .catch((error) => setError(error.message));
        // .finally(() => setIsloading(false));
    };

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
    }, []);

    const handleUserRegister = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        isLoading,
        googleSignIn,
        handleUserRegister,
        handleUserLogin,
        logOut
    }
};

export default useFirebase;