import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import Firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		loading: false,
		loggedIn: false,
		currentUser: {},
		errors: {}
	},
	getters: {
		GET_CURRENT_USER: (state) => state.currentUser,
		GET_ERRORS: state => state.errors
	},
	mutations: {
		LOGIN_EMAIL(state, payload) {
			console.log(state)
			state.loading = true
			Firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
				.then(payload => {
					state.loading = false
					state.loggedIn = true
					// payload && router.push('/dashboard')
					console.log('login protocol:', payload);
					state.currentUser = payload
				}).catch(error => {
					state.loading = false
					state.errors = error
					// state.errors.message = error.message
				})
			console.log(state, 'state')
		},
		SIGNUP_EMAIL(state, payload) {
			Firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
				.then(currentUser => {
					currentUser && router.push('/dashboard')
					console.log('signed up user: ', currentUser);
				})
			state.currentUser = payload
		},
		SET_CURRENT_USER(state, payload) {
			state.currentUser = payload
		}
	},
	actions: {
		LOGIN_EMAIL({ commit }) {
			commit('LOGIN_EMAIL', payload)
		},
		SIGNUP_EMAIL({ commit }) {
			commit('SIGNUP_EMAIL', payload)
		},
		SET_CURRENT_USER({ commit }) {
			commit('SET_CURRENT_USER', payload)
		}
	}
});

export default store