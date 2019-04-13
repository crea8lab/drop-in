import firebase from 'firebase/app';
import 'firebase/firestore';

// Init Firebase
const config = {
	apiKey: 'AIzaSyC0gPYkG7Dfisz0EGu2SgXMgcCiMe8ju90',
	authDomain: 'drop-in-app.firebaseapp.com',
	databaseURL: 'https://drop-in-app.firebaseio.com',
	projectId: 'drop-in-app',
	storageBucket: 'drop-in-app.appspot.com',
	messagingSenderId: '899204736409'
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
	timestampsInSnapshots: true
});

export default db;
