<template>
    <div id="app">
        <!--img src="./assets/logo.png"-->
        <navigation></navigation>
        <router-view :text="inputText" @textUpdated="getText($event)"/>
    </div>
</template>

<script>
import navigation from '@/components/nav/index'

export default {
    name: 'app',
    data: function() {
        return {
            'inputText': "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars."
        }
    },
    components: {
        navigation
    },
    methods: {
        getText: function(response) {
            this.inputText = response
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
