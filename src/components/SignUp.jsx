import React, {useState} from "react";
import PropTypes from 'prop-types';
import api from "../helper/api";

const SignUp = ({signUpUser}) => {

    const [emailId, setEmailId] = useState(null);
    const [password, setPassword] = useState(null);


    const registerUser = (event) => {
        event.preventDefault();
        if (emailId && password) {
            console.log("========", emailId, password);
            const response = api.signUp.post({emailId, password})
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }
    }

    const handleEmailChange = (event) => setEmailId(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    return (
        <section>
            <form onSubmit={registerUser}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <label htmlFor="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    onChange={event => handleEmailChange(event)}
                    required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    onChange={event => handlePasswordChange(event)}
                    required/>

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

                <div>
                    <button
                        type="submit"
                        className="sign-up"
                    >Sign Up
                    </button>
                </div>
            </form>
        </section>
    )
}

export default SignUp;