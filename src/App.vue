<template>
    <div id="app">
        <Login />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from './views/login/index.vue';

export default defineComponent({
    name: 'App',
    components: {
        Login,
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 20px;
}
</style>
