<template>
    <div>
        <Header></Header>

        <Chart :chartOptions="chartOptions" />
        <button @click="handleClick">测试改变数据</button>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    //import BannerAnimate from '@/components/Header';
    import Chart from '@/components/Chart';

    export default {
        components: {
            Header,
            Chart
        },
        data() {
            return {
                vis: true,
                chartOptions: {
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [10, 20, 36, 10, 10, 20],
                        },
                    ],
                }
            }
        },
        methods: {
            handleClick() {
                this.chartOptions.xAxis.data = ['衬衫1', '羊毛衫2', '雪纺衫', '裤子', '高跟鞋', '袜子']
                // this.chartOptions = {
                //     xAxis: {
                //         data: ['衬11衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                //     },
                //     yAxis: {},
                //     series: [
                //         {
                //             name: '销量',
                //             type: 'bar',
                //             data: [5, 22, 38, 11, 11, 22],
                //         },
                //     ],
                // };
            }
        }
    }
</script>

<style scoped>

</style>