import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';

function GoogleLogin() {
    const firebaseConfig = {
        apiKey: "AIzaSyCHdvWMSjo3kZpc4AoNj_Uk0P8iW8EySKg",
        authDomain: "react-chat-app--login.firebaseapp.com",
        projectId: "react-chat-app--login",
        storageBucket: "react-chat-app--login.appspot.com",
        messagingSenderId: "589595217234",
        appId: "1:589595217234:web:8d8703d87f74757adc3e8b",
        measurementId: "G-Q7C1B87FM1"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    auth.languageCode = 'it';
    const provider = new GoogleAuthProvider();
    const Goggle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div>
            <div onClick={Goggle} className='google'>
                <span className='google_icon'><FcGoogle /></span>
                <span>Continue with Google</span>
            </div>
        </div>
    )
}

export default GoogleLogin
