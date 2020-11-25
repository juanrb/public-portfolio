import React from 'react';
import {
	Admin,
	Resource,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { FirebaseAuthProvider } from 'react-admin-firebase';

// Local
import Login from './core/auth/Login';
import fire from './config/fire';
import {
	PhotoCreate,
	PhotoEdit,
	PhotoList,
} from './scenes/Photos';

console.log(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}`);

const dataProvider = jsonServerProvider(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}`);
const authProvider = FirebaseAuthProvider(fire.config, fire.authOptions);

const App = () => (
	<Admin
		authProvider={authProvider}
		dataProvider={dataProvider}
		loginPage={Login}
	>
		<Resource name='photos' list={PhotoList} edit={PhotoEdit} create={PhotoCreate} />
	</Admin>
);

export default App;
