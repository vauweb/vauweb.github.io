<template>
    <component :is="projectComponent"></component>
</template>

<script>
    export default {
        name: "project",
        components: {},
        created(){
            this.importProject(this.$route);
        },
        beforeRouteUpdate (to, from, next) {
            this.importProject(to,next);
        },
        beforeRouteLeave(to, from, next){
            this.projectComponent = null;
            next();
        },
        beforeCreate() {
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        },
        errorCaptured(err, vm, info) {
            console.error(err, info);
        },
        data() {
            return {
                projectComponent:null
            };
        },
        props: {},
        computed: {},
        watch: {},
        methods: {
            importProject(to, next){
                let pr;
                if(to.params.subProject) {
                    pr = httpVueLoader(`/projects/${to.params.nameProject}/${to.params.subProject}/index.vue`);
                }else{
                    pr = httpVueLoader(`/projects/${to.params.nameProject}/index.vue`);
                }
                pr().then(module=>{
                    if(module) {
                        this.projectComponent = module;
                        if(next) {
                            next();
                        }
                    }else{
                        if(next) {
                            next(false);
                        }else{
                            this.$router.push("/");
                        }
                    }
                }).catch(error=>{
                    if(next) {
                        next(false);
                    }else{
                        this.$router.push("/?e");
                    }
                });
                /*import(
                    /!* webpackChunkName: "project-[request]" *!/
                    /!* webpackMode: "lazy" *!/
                    `/${to.params.nameProject}/index.js`)
                    .then(module=>{
                        if(module.default) {
                            this.projectComponent = module.default;
                            if(next) {
                                next();
                            }
                        }else{
                            if(next) {
                                next(false);
                            }else{
                                this.$router.push("/");
                            }
                        }
                    })
                    .catch(error=>{
                        if(next) {
                            next(false);
                        }else{
                            this.$router.push("/?e");
                        }
                    });*/
            }
        },
    }
</script>

<style scoped>

</style>
