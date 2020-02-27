<template>
    <v-card>
        <div class="qwe">{{$options.name}} {{$store.state.moduleName}}</div>
    </v-card>
</template>

<script>
    export default {
        name: "item",
        components: {},
        beforeCreate() {
        },
        created() {
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
            };
        },
        props: {},
        computed: {},
        watch: {},
        methods: {},
    }
</script>

<style scoped>
    .qwe{
        background-color: #a5dc9b;
    }
</style>
