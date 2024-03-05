var cognitoUser, sessionUserAttributes; // global variables to handle completeNewPasswordChallenge flow

// ...

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        // User authentication was successful
        console.log("User authentication successful:", result);
    },

    onFailure: function(err) {
        // User authentication was not successful
        console.error("User authentication failed:", err);
    },

    mfaRequired: function(codeDeliveryDetails) {
        // MFA is required to complete user authentication.
        // Get the code from user and call
        cognitoUser.sendMFACode(mfaCode, this);
    },

    newPasswordRequired: function(userAttributes, requiredAttributes) {
        // User was signed up by an admin and must provide new
        // password and required attributes, if any, to complete
        // authentication.

        // the api doesn't accept this field back
        delete userAttributes.email_verified;

        // store userAttributes on global variable
        sessionUserAttributes = userAttributes;

        // handle new password flow on your app
        handleNewPassword(newPassword);
    }
});

// handle new password flow on your app
function handleNewPassword(newPassword) {
    cognitoUser.completeNewPasswordChallenge(newPassword, sessionUserAttributes, {
        onSuccess: function(result) {
            // New password challenge completed successfully
            console.log("New password challenge completed successfully:", result);
        },
        onFailure: function(err) {
            // Error completing new password challenge
            console.error("Error completing new password challenge:", err);
        }
    });
}
