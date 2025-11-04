// src/utils/actionCodeSettings.js

const currentHost = window.location.origin; 
// This will automatically detect whether you're on localhost or live

const actionCodeSettings = {
  // Redirect URL after the user clicks the email link
  url: `${currentHost}/finishSignIn`,

  // Ensure the link is handled inside the web app
  handleCodeInApp: true,

  // Optional: for mobile deep linking
  iOS: {
    bundleId: "com.yourapp.ios",
  },
  android: {
    packageName: "com.yourapp.android",
    installApp: true,
    minimumVersion: "12",
  },

  // Optional: if you set up a custom domain in Firebase Hosting
  // linkDomain: "your-custom-domain.firebaseapp.com",
};

export default actionCodeSettings;
