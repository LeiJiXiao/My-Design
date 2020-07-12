<template>
    <div class="menu">
        <router-link :to="item.to" v-slot="{ href, route, navigate, isActive }" v-for="(item, index) in route" :key="index">
            <div class="nav-item rel" :class="{ 'active':isActive }" :href="href" @click="navigate">{{ item.name }}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            route: {
                type: Array,
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    .nav-item{
        margin-bottom: 30px;
        cursor: pointer;
        position: relative;
        &:hover,
        &.active{
             color: #409EFF;
         }
    }
    .menu{
        position: absolute;
        left: -10%;
        top: 0;
    }
</style>