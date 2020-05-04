import React from 'react';
import './sign-in-and-sign-up.style.scss';
import SignInComponent from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPage = () => {
    return(
        <div className="sign-in-and-sign-up">
            <SignInComponent/>
        </div>
    );
}

export default SignInAndSignUpPage;