import {auth, googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {useState} from "react";
import { signInWithPopup } from 'firebase/auth';
// Import the auth function from the firebase.js file in the config folder

export const Auth = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const signIn = async () => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                // Add your sign-in logic here
            }    catch (err) {
                console.error(err);
            }
            
        };

        const signInWithGoogle = async () => {
            try {
                await signInWithPopup(auth, googleProvider);
                // Add your sign-in logic here
            } catch (err) {
                console.error(err);
            }
        };

        const signOut = async () => {
            try {
                await signOut(auth);
                // Add your sign-out logic here
            } catch (err) {
                console.error(err);
            }
        }
    return ( 
    <div>
        <input placeholder="Email.."/>
        onChange={(e) => setEmail(e.target.value)}
        <input placeholder="Password.."/>
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        <button>Sign in</button>
        <button onClick={signIn}> SignIn </button>
        <button onClick={signInWithGoogle}>SignIn With Google</button>
        <button> onClick={signOut}Logout</button>
    </div>
    );
};