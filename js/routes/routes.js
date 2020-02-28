const project = httpVueLoader('/js/pages/project.vue');
export default [
    { path: "/", component: httpVueLoader('/js/pages/index.vue')},
    { path: "/page2", component: httpVueLoader('/js/pages/page2.vue')},
    { path: "/project", component: httpVueLoader('/js/pages/project.vue')},
    {
        path: "/project/:nameProject/:idProject",
        name:"project",
        component:project,
    },
    {
        path: "/project/:nameProject/:idProject/:subProject",
        name:"subproject",
        component:project,
    },
    { path: "/*", component: ()=>import("/js/pages/404.js")},
]
