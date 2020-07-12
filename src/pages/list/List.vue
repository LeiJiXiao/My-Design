<template>
    <div id="main">
        <Header></Header>
        <div class="container">
            <Menu :route="menuList"></Menu>
            <template v-if="currentName === 'dialog'">
                <DialogPreview></DialogPreview>
            </template>
            <template v-if="currentName === 'chart'">
                2
            </template>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Menu from '@/components/Menu';
    import DialogPreview from './DialogPreview';


    export default {
        components: {
            Header,
            Menu,
            DialogPreview
        },
        props: {
            name: {
                type: String,
                default() {
                    return 'dialog';
                }
            }
        },
        directives: {

        },
        data() {
            return {
                menuList: [
                    { to: '/list/dialog', name: 'dialog对话框' },
                    { to: '/list/chart', name: 'chart图表' },
                ],
            }
        },
        computed: {
            currentName() {
                return this.$route.params.name;
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        position: relative;

    }
</style>