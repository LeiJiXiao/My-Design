import Home from '@/pages/index/Home';
import List from '@/pages/list/List';

export default {
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        { path: '/index', component: Home },
        { path: '/list/:name', component: List, prop: true },
    ]
}