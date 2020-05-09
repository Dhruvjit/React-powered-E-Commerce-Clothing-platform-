/* this will be a class component because
* we have to store what user is typing in
*  */

import React from 'react';
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignInComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        } catch (e) {
            alert(e);
        }
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                               type="email"
                               handleChange={this.handleChange}
                               labelName="email"
                               value={this.state.email}
                               required
                    />
                    <FormInput name="password"
                               type="password"
                               handleChange={this.handleChange}
                               labelName="password"
                               value={this.state.password}
                               required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInComponent;