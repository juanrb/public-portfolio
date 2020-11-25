import firebase from 'firebase/app';

var config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const fire = firebase.initializeApp(config);
fire.config = config;
fire.authOptions = {
  logging: true,
  app: fire,
  persistence: 'local',
  dontAddIdFieldToDoc: true
}

export default fire;
