import React, { useState } from 'react';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';



const poolData = {
    UserPoolId: process.env.REACT_APP_POOL_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID,
};

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const userPool = new CognitoUserPool(poolData);

        const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email }),
        ];

        userPool.signUp(username, password, attributeList, null, (err, result) => {
            if (err) {
                setMessage("Signup Error: " + err.message);
                console.error("Signup Error:", err);
                return;
            }
            setMessage("Successfully created a Cognito account for: " + email );
            console.log("Signup Success:", result);
            // Optionally, you can redirect the user to another page after successful signup
        });
    };

    return (
        <div className="container">
          <h2>Sign Up</h2>
          {message && <p className="error-message">{message}</p>}
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      );
      
};

export default SignUp;
