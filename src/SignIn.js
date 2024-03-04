import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_POOL_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID,
};



const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const authenticationData = {
            Username: username,
            Password: password
        };
    
        const authenticationDetails = new AuthenticationDetails(authenticationData);
        const userPool = new CognitoUserPool(poolData);
    
        const userData = {
            Username: username,
            Pool: userPool
        };
    
        const cognitoUser = new CognitoUser(userData);
    
        try {
            await new Promise((resolve, reject) => {
                cognitoUser.authenticateUser(authenticationDetails, {
                    onSuccess: (data) => {
                        setMessage("Login Success: " + JSON.stringify(data));
                        console.log("Login Success", data);
                        resolve(data);
                    },
                    onFailure: (err) => {
                        setMessage("Login Failure: " + err.message);
                        console.log("Failure", err.message);
                        reject(err);
                    },
                    newPasswordRequired: (data) => {
                        setMessage("New Password Required: " + JSON.stringify(data));
                        console.log("New Password Required", data);
                        resolve(data);
                    }
                });
            });
        } catch (error) {
            setMessage(`Error: ${error.message}\nError Code: ${error.code}\n${error.stack}\n ${error}`);
            console.error('Error:', error);
        }
    };
      
    return (
        <div className="Login">
            <h2>Login</h2>
            <p>{message}</p>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default SignIn;
