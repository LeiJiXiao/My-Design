<template>
    <div>
        <div class="clearfix header">
            <div class="title"><h2>Bnt Design</h2></div>
            <div class="fr nav">
                <router-link to="/index" v-slot="{ href, route, navigate, isActive }">
                    <span class="nav-item rel" :class="{ 'active':isActive }" :href="href" @click="navigate" >首页</span>
                </router-link>
                <router-link to="/list" v-slot="{ href, route, navigate, isActive }">
                    <span class="nav-item rel" :class="{ 'active':isActive }" :href="href" @click="navigate" >组件</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        border-bottom: 1px solid #dcdfe6;
        margin-bottom: 30px;
    }
    .title{
        color: #409EFF;
    }
    .nav-item{
        cursor: pointer;
        line-height: 66px;
        height: 66px;
        padding: 0 5px 0 35px;
        position: relative;
        &:hover,
        &.active{
         color: #409EFF;
        }
    }
</style>