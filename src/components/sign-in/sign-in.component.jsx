/* this will be a class component because
* we have to store what user is typing in
*  */

import React from 'react';
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

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

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
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
                    <CustomButton type="submit" value="Submit Form">
                        Sign In
                    </CustomButton>
                    &nbsp;&nbsp;
                    <CustomButton onClick={signInWithGoogle}>
                        Sign In with Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignInComponent;