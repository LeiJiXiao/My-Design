<template>
    <div>
        <Header></Header>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    //import BannerAnimate from '@/components/Header';

    export default {
        components: {
            Header,
        },
        data() {
            return {
                vis: true
            }
        }
    }
</script>

<style scoped>

</style>