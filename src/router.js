import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Project from './views/Project.vue';
import Team from './views/Team.vue';
import Login from './views/auth/login.vue';
import store from './store'

import Firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/projects',
			name: 'project',
			component: Project,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/team',
			name: 'team',
			component: Team,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/auth/login',
			name: 'login',
			component: Login
		}
	]
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const currentUser = Firebase.auth().currentUser;
	store.commit('SET_CURRENT_USER', currentUser)
	// console.log('cureentUser:', currentUser);

	if (requiresAuth && !currentUser) {
		next('/auth/login');
	} else if (requiresAuth && currentUser) {
		next();
	} else {
		next();
	}
});

export default router;
