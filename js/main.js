import routes from "./routes/routes.js";
import store from "./store/index.js";

const app = new Vue({
    vuetify: new Vuetify({
        icons: {
            iconfont: "mdi", // "mdi" || "mdiSvg" || "md" || "fa" || "fa4"
        },
    }),
    store,
    router:new VueRouter({
        routes,
        mode:"history", //"history", "hash"
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(savedPosition);
                    }, 200);
                });
            } else {
                return { x: 0, y: 0 };
            }
        },
        beforeEnter:(to,from,next)=>{
            next();
        }
    }),
    el: '#app',
    components:{
        'wm-app': httpVueLoader('/js/app.vue')
    },
    template:`<wm-app/>`,
});
