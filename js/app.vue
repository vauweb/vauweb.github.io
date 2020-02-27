<template>
    <v-app>
        <v-navigation-drawer app v-model="menu" disable-resize-watcher>
            <v-toolbar dense>
                <v-btn icon title="Закрыть меню" @click.stop="menu = !menu"><v-icon>mdi-close</v-icon></v-btn>
            </v-toolbar>
            <v-list>
                <v-list-item to="/">
                    <v-list-item-content>
                        <v-list-item-title>/</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/page2">
                    <v-list-item-content>
                        <v-list-item-title>/page2</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dense>
            <v-btn icon title="Открыть меню" @click.stop="menu = !menu"><v-icon>mdi-menu</v-icon></v-btn>
        </v-app-bar>
        <v-content>
<!--            <v-container fluid>-->
                <router-view />
<!--            </v-container>-->
        </v-content>
    </v-app>
</template>

<script>
    export default {
    // module.exports = {
        name: "App",
        data(){return{
            menu:false
        }},
    }
</script>

<style scoped>

</style>
