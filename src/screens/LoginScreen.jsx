import React, { useState } from "react";
import "./LoginScreen.css";
import login_logo from "../images/netflix-logo.png";
import SignupScreen from "./SignupScreen";
const LoginScreen =() =>{
    const [signIn,setSignIn]=useState(false);
    return (
    <div className="loginScreen">
        <div className="loginScreen_bg">
            <img src={login_logo} alt="" className="loginScreen_logo"/>
            <button className="loginScreen_button" onClick={() => setSignIn(true)}>Sign In</button>
            <div className="loginScreen_gradient"></div>
        </div>
        <div className="loginScreen_body">
        {(signIn) ?(<SignupScreen />):
        (<>
            
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginScreen_input">
                    <form >
                       <input type="email" placeholder="Email Address"/>
                       <button className="loginScreen_getStarted" onClick={() => setSignIn(true)}>Get Started</button>
                    </form>
                </div>
            
        </>)
        }    
        </div>
    </div>
)
}
export default LoginScreen