<template>
    <div id="main">
        <Header></Header>
        <div class="wrap">
            <Menu :route="menuList"></Menu>
            <div class="container">

                <template v-if="currentName === 'dialog'">
                    <DialogPreview></DialogPreview>
                </template>
                <template v-if="currentName === 'chart'">
                    <ChartPreview></ChartPreview>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Menu from '@/components/Menu';
    import DialogPreview from './DialogPreview';
    import ChartPreview from './ChartPreview';


    export default {
        components: {
            Header,
            Menu,
            DialogPreview,
            ChartPreview
        },
        props: {
            name: {
                type: String,
                default () {
                    return 'dialog';
                }
            }
        },
        directives: {

        },
        data() {
            return {
                menuList: [{
                        to: '/list/dialog',
                        name: 'dialog对话框'
                    },
                    {
                        to: '/list/chart',
                        name: 'chart图表'
                    },
                ],
            }
        },
        computed: {
            currentName() {
                return this.$route.params.name || 'dialog';
            }
        },
        mounted() {
            console.log(this.$route.params)
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        padding: 0 10px;
    }

    .container {
        flex: 1;
    }
</style>