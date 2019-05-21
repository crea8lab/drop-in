import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Project from './views/Project.vue';
import Team from './views/Team.vue';
import Login from './views/auth/login.vue';
import store from './store';

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
	if (requiresAuth) {
		next('/auth/login');
	} else {
		next();
	}
});

export default router;
