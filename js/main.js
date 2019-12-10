let redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
}

Vue.use(VueRouter);
const app = new Vue({
    vuetify: new Vuetify({
        icons: {
            iconfont: "mdi", // "mdi" || "mdiSvg" || "md" || "fa" || "fa4"
        },
    }),
    router:new VueRouter({
        routes:[
            { path: "/" },
            { path: "/*", component:()=>import("./pages/404.js")},
        ],
        mode:"history", //"hash"
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
    },
    data: {
      drawer:false
    },
    methods:{},
    computed:{},
    watch:{},
    template:`<v-app dark>
    <v-navigation-drawer app v-model="drawer" disable-resize-watcher>
        <v-toolbar dense>
            <v-btn icon title="Закрыть меню" @click.stop="drawer = !drawer"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
    </v-navigation-drawer>
    <v-app-bar app dense>
        <v-btn icon title="Открыть меню" @click.stop="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-btn>
    </v-app-bar>   
    <v-content>
        <v-container fluid>
            <router-view />
        </v-container>
    </v-content>
</v-app>`
});
