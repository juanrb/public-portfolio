// Libs
import {
	Login as RaLogin,
	LoginForm
} from 'react-admin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';

// Local
import fire from '../../config/fire';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

const Login = props => (
  <RaLogin {...props}>
    <LoginForm {...props} />
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()}/>
  </RaLogin>
);

export default Login;
