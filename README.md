# React Cognito App

This React application integrates with AWS Cognito for user authentication. It includes features for user signup and password change.

## Setup

1. Clone the repository to your local machine.

2. Install dependencies using npm:

   ```bash
   npm install





# dotenv
Create a .env file in the root directory of the project and add the following environment variables:
Copy code
   ```bash
   REACT_APP_POOL_ID=your_cognito_user_pool_id
   REACT_APP_CLIENT_ID=your_cognito_client_id

# Ensure you have the necessary AWS Cognito user pool and client set up in your AWS account.




## Directory Structure
src/
Signup.js: Contains the code for user signup validation and page.
ChangePassword.js: Manages password change functionality with proper validation.
Other React components and files.

## Configuration
The application uses environment variables to configure the AWS Cognito integration. Make sure to replace your_cognito_user_pool_id and your_cognito_client_id with your actual AWS Cognito user pool ID and client ID respectively.

## Dependencies
@aws-amplify/ui-react: UI components for AWS Amplify.
amazon-cognito-identity-js: SDK for working with AWS Cognito user pools.
aws-amplify: AWS Amplify library for authentication and API management.
aws-sdk: AWS SDK for JavaScript.
react: React library.
react-dom: React DOM library.
react-router-dom: React Router library for handling routing.
react-scripts: Scripts and configurations for React development.

## Available Scripts
In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm eject`: Ejects the app from Create React App setup.
