import React, { useState, useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from './Home';
import './Signin.css';

function SignIn() {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setValue(result.user.email); // Changed data to result
                localStorage.setItem("email", result.user.email); // Changed user.data.email to result.user.email
            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    };

   

    useEffect(() => {
        // Added a callback function to useEffect to prevent infinite loop
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setValue(storedEmail);
        }
    }, []); // Added empty dependency array to useEffect to run only once when component mounts

    return (
        <div className="Container">
        <div className="Ats">
        <h1>Project Auth With Google</h1>
        
    </div>
        <div className="Button">
            {value ? (
                <Home />
            ) : (
                <button onClick={handleClick}>Sign in with Google</button>
            )}
        </div>
    </div>
    );
   
}

export default SignIn;
