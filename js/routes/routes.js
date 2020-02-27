export default [
    { path: "/", component: httpVueLoader('/js/pages/index.vue')},
    { path: "/page2", component: httpVueLoader('/js/pages/page2.vue')},
    { path: "/*", component: ()=>import("/js/pages/404.js")},
]
