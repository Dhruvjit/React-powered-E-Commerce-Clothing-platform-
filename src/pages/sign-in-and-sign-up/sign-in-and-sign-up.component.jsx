import React from 'react';
import './sign-in-and-sign-up.style.scss';
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
    return(
        <div className="sign-in-and-sign-up">
            <SignInComponent/>
            <SignUpComponent/>
        </div>
    );
}

export default SignInAndSignUpPage;