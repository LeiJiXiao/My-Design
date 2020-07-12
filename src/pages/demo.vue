<template>
    <div>
        <div>
            <Chart :chartOptions="chartOptions" />
        </div>
</template>

<script>
    export default {
        data() {
            return {
                chartOptions: {
                    xAxis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                    series: [10, 20, 36, 10, 10, 20],
                }
            }
        }
    }
</script>