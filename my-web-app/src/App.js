import logo from "./logo.svg";
import "./App.css";
import { Auth } from "./components/auth";
import { auth, googleProvider } from "./config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Auth from "./components/auth";
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";
import UserPage from "./components/UserPage";
import PhotoPage from "./components/PhotoPage";

/**
 * The main application component.
 * 
 * This component renders the main structure of the application, including the header,
 * logo, and a link to the React documentation.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  return <div className="App"><Auth/></div>;
      
    
  
}

export default App;
