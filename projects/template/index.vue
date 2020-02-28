<template>
    <v-container fluid fill-height class="justify-center">
        <v-card width="600" height="400">
            {{$options.name}} {{moduleName}}  {{moduleName2}}
        </v-card>
    </v-container>
</template>

<script>

    export default {
        name: "templateIndex",
        components: {},
        beforeCreate() {
        },
        created() {
        },
        mounted() {
            import("/projects/template/store.js").then(store=>{
                if(this && this.$store){
                    this.$store.registerModule(this.$options.name, store.default);
                    // this.$forceUpdate();
                }
            });
            // this.$store.registerModule('template', store)
        },
        beforeUpdate() {
        },
        updated() {
        },
        beforeDestroy() {
        },
        destroyed() {
            this.$store.unregisterModule(this.$options.name);
        },
        errorCaptured(err, vm, info) {
            console.error(err, info);
        },
        data() {
            return {};
        },
        props: {},
        computed: {
            moduleName(){
                return this.$store.state[this.$options.name] && this.$store.state[this.$options.name].moduleName || this.$store.state.moduleName;
            },
            ...Vuex.mapState("templateIndex", {
                moduleName2: state => state.moduleName,
            })
        },
        watch: {},
        methods: {
        },
    }
</script>

<style scoped>

</style>
