import Home from '@/pages/index/Home';
import List from '@/pages/list/List';

export default {
    base: '/',
    routes: [
        { path: '/index', component: Home },
        { path: '/list', component: List },
    ]
}