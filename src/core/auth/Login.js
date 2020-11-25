// Libs
import {
	Login as RaLogin,
	LoginForm
} from 'react-admin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import ForgotPasswordButton from './CustomForgotPassword'
import firebase from 'firebase/app';

// Local
import fire from '../../config/fire';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID 
  ]
};

const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()}/>;

const Login = props => (
  <RaLogin {...props}>
    <div style={{fontFamily: 'monospace', marginLeft: '15px'}}>
      <p>Username: test@example.com</p>
      <p>Password: password</p>
    </div>
    <LoginForm {...props} />
    {/* <ForgotPasswordButton {...props} /> */}
    <SignInScreen />
  </RaLogin>
);

export default Login;
