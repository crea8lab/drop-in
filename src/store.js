import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loading: false,
		loggedIn: false,
		user: {}
	},
	getters: {
		GET_CURRENT_USER = (state) => state.user
	},
	mutations: {
		LOGIN_EMAIL(state, payload) {
			state.user = payload
		},
		SIGNUP_EMAIL(state, payload) {
			state.user = payload
		}
	},
	actions: {
		LOGIN_EMAIL({ commit }) {
			commit('LOGIN_EMAIL', payload)
		},
		SIGNUP_EMAIL({ commit }) {
			commit('SIGNUP_EMAIL', payload)
		}
	}
});
