<template>
    <div>
        <el-select @change="changeHandler">
            <el-option :value="1" label="默认1"></el-option>
            <el-option :value="2" label="数据2"></el-option>
            <el-option :value="3" label="数据3"></el-option>
        </el-select>
        <div>
            <Chart :chartOptions="chartOptions" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
            changeHandler(v) {
                if (v === 1) {
                    this.chartOptions = {
                        xAxis: {
                            data: ['衬衫1', '羊毛衫1', '雪纺衫1', '裤子1', '高跟鞋1', '袜子1'],
                        },
                        yAxis: {},
                        series: [
                            {
                                name: '销量',
                                type: 'bar',
                                data: [100, 200, 300, 400, 500, 600],
                            },
                        ],
                    };
                } else if (v === 2) {
                    this.chartOptions = {
                        xAxis: {
                            data: ['衬衫2', '羊毛衫2', '雪纺衫2', '裤子2', '高跟鞋2', '袜子2'],
                        },
                        yAxis: {},
                        series: [
                            {
                                name: '销量',
                                type: 'bar',
                                data: [600, 500, 500, 300, 200, 100],
                            },
                        ],
                    };
                } else if ( v === 3) {
                    this.chartOptions = {
                        xAxis: {
                            data: ['成都', '北京', '上海', '深圳', '广州', '武汉'],
                        },
                        yAxis: {},
                        series: [
                            {
                                name: 'GDP',
                                type: 'bar',
                                data: [60000, 50000, 504440, 3444400, 20330, 10220],
                            },
                        ],
                    };
                }
            }
        }
    }
</script>

<style scope>

</style>