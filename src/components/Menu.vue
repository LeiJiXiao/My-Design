<template>
    <div class="menu">
        <router-link :to="item.to" v-slot="{ href, route, navigate, isActive }" v-for="(item, index) in route"
            :key="index">
            <div class="nav-item rel" :class="{ 'active':isActive }" :href="href" @click="navigate">{{ item.name }}
            </div>
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
    .menu .nav-item {
        margin-bottom: 30px;
        cursor: pointer;
        font-size: 14px;

        &:hover,
        &.active {
            color: #409EFF;
        }
    }

    .menu {
        width: 120px;
        border-right: 1px solid #ddd;
        margin-right: 30px;
    }
</style>