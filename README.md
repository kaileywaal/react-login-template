# react-login-template

This template was created based on the video https://github.com/kaileywaal/react-login-template.git.

This template uses:
create-react-app
bootstrap
firebase

## Initial Firebase Setup

The React code in this template can be used with any authentication server. The simplest way to set it up, however, is with [Firebase](https://github.com/kaileywaal/react-login-template.git).

### Creating the Firebase Project

1. Create a new Firebase project. For the best security, make a development version that is separate from your production version. Everything you do on the development version should also be done on the production Firebase project to ensure they are in sync.
2. In the authetintication tab (found under Build), click "Get Started." Under the "Sign-in method" tab, choose "enable" for any sign in methods methods you want to use in your app.
3. Under Settings > Authorized Domains, you will see localhost. This should remain for the development environment, but in your production environment you will want to delete this for security purposes.

### Get API Keys to Interact With Firebase App

1. Under Project Overview tab, add a web app. Use the button labeled </>
2. Name your app and click "Register App".
3. You will now see firebase configuration settings that need copied into your application. It should look something like this:
   ![config settings](screenshots/firebase_config_settings_source.png)

## Adding Firebase to your Application

1. If you haven't already done so, create your application with create-react-app.
2. Create an .env file. This should be called ".env.local" and should be on the same level as your src and public folders (ie it should not be nested inside the folders).
3. Set up your environment variables using the keys found in your Firebase console. These variables must begin with REACT_APP to be used in your application (for example, REACT_APP_FIREBASE_API_KEY). Your .env.local file should look something like this:

```
REACT_APP_FIREBASE_API_KEY=AIzaSyDg6vUiHDeT7YcVpqpZkDa8G_5tDJV746Q
REACT_APP_FIREBASE_AUTH_DOMAIN=react-login-template-dev.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=react-login-template-dev
REACT_APP_FIREBASE_STORAGE_BUCKET=react-login-template-dev.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=4964400240
REACT_APP_FIREBASE_APP_ID=1:4964400240:web:a9c4b0b491fc26bea648b5
```

4. Install firebase in your app by `running npm i firebase`
5. The setup for firebase can be found in src/firebase.js
