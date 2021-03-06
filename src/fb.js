import firebase from 'firebase/app';
import 'firebase/firestore';

// Init Firebase
const config = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: process.env.VUE_APP_AUTH_DOMAIN,
	databaseURL: process.env.VUE_APP_DATABASE_URL,
	projectId: process.env.VUE_APP_PROJECT_ID,
	storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
	// timestampsInSnapshots: true
});

export default db;
