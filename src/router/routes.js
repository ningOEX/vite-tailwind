const routes = [
    { path: '/', component: () => import('../views/home.vue') },
    { path: '/film-list', component: () => import('../views/film-list.vue') },
]

export default routes