import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInit from "../pages/Login/Firebase/firebase.init";

firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        googleSignIn,
        logOut
    }
};

export default useFirebase;