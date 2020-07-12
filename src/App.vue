<template>
    <div id="app">
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>
    #app {
        /* margin: 0 10%; */
        color: #2c3e50;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
    }
</style>