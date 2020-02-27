<template>
    <v-container fluid fill-height class="justify-center">
        <v-card width="600" height="400" class="qwe">
            {{$options.name}}
            <st-item></st-item>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "page2",
        components: {
            'st-item': httpVueLoader('/js/components/item.vue')
        },
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
            return {};
        },
        props: {},
        computed: {},
        watch: {},
        methods: {},
    }
</script>

<style scoped>
    .qwe{
        background-color: #4d81dc;
    }
</style>
