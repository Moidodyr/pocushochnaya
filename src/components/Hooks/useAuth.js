import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { authentication } from '../../firebase-config';

export const useAuth = () => {
    const [authenticated, setAuthentication] = useState(null)

    const provider = new GoogleAuthProvider()
    const logIn = () => {
        signInWithPopup(authentication, provider)
            .catch(err => console.log(err))
    }
    const logOut = () => authentication.signOut()
        .catch(err => console.error(err))

    useEffect(() => {
        onAuthStateChanged(authentication, user => {
            if(user) {
                setAuthentication(user)
            } else {
                setAuthentication(null)
            }
        })
    }, [authenticated])
    
    return {authenticated, logIn, logOut}
};