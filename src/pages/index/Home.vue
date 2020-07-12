<template>
    <div>
        <Header></Header>
        <Banner></Banner>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Banner from '@/components/Banner';

    export default {
        components: {
            Header,
            Banner
        },
        data() {
            return {
                vis: true,
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>