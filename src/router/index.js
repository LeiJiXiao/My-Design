export default {
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        { path: '/index', component(resolve) {require(['@/pages/index/Home'], resolve)} },
        { path: '/list/:name', component(resolve) {require(['@/pages/list/List'], resolve)}, props: true },
    ]
}