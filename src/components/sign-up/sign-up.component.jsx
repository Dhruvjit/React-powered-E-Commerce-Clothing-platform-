/* This will also be a stateful class because as the user
    types in we need to store that data just like what we do
    sign in page
 */

import React from 'react';
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUpComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            display: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        // prevent default form submit action
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('passwords dont match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            // set our state equal to initial state where everything is empty
            // once form is submitted
            this.setState({
                display: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        }catch (e) {
            alert(e);
        }
    }

    handleChange = event => {
        debugger
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-up'>
                <h2 className='title'>
                    I do not have an account
                </h2>
                <span>
                    Sign up with your email and password
                </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name="display"
                               type="text"
                               value={this.state.display}
                               handleChange={this.handleChange}
                               labelName='Display Name'
                               required
                    />
                    <FormInput name="email"
                               type="email"
                               handleChange={this.handleChange}
                               labelName="email"
                               value={this.state.email}
                               required
                    />
                    <FormInput type='password'
                               name='password'
                               value={this.state.password}
                               handleChange={this.handleChange}
                               labelName='Password'
                               required
                    />
                    <FormInput type='password'
                               name='confirmPassword'
                               value={this.state.confirmPassword}
                               handleChange={this.handleChange}
                               labelName='Confirm  Password'
                               required
                    />
                    <CustomButton type='submit'>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUpComponent;