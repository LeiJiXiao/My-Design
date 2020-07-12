<template>
    <div class="comp-list">
        <div class="comp-desc-box">
            <h2 class="name">Chart 柱状图表</h2>
            <p class="desc">柱状/条形图 通过 柱形的高度/条形的宽度 来表现数据的大小，用于有至少一个类目轴或时间轴的直角坐标系上。</p>
        </div>
        <div class="use-list">
            <div class="item">
                <div class="demo-block">
                    <div class="source">
                        <Chart :chartOptions="chartOptions" />
                    </div>
                    <div class="mate" v-show="showCode1">
                            <pre v-highlightjs>
                                <code class="html hljs xml">{{ chartDemoCode1 }}</code>
                            </pre>
                    </div>
                    <div class="demo-block-control" @click="showCode1 = !showCode1">
                        <i class="el-icon-arrow-down" v-show="!showCode1"></i>
                        <i class="el-icon-arrow-up" v-show="showCode1"></i>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="demo-block">
                    <div style="padding: 20px">
                        <el-select :value="''" @change="changeHandler">
                            <el-option :value="1" label="默认1"></el-option>
                            <el-option :value="2" label="数据2"></el-option>
                            <el-option :value="3" label="数据3"></el-option>
                        </el-select>
                    </div>
                    <div class="source">
                        <Chart :chartOptions="chartOptions2" />
                    </div>
                    <div class="mate" v-show="showCode2">
                            <pre v-highlightjs>
                                <code class="html hljs xml">{{ chartDemoCode2 }}</code>
                            </pre>
                    </div>
                    <div class="demo-block-control" @click="showCode2 = !showCode2">
                        <i class="el-icon-arrow-down" v-show="!showCode2"></i>
                        <i class="el-icon-arrow-up" v-show="showCode2"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from '@/components/Chart';
    import {
        chartDemoCode1,
        chartDemoCode2
    } from './demo-code';

    export default {
        components: {
            Chart
        },
        data() {
            return {
                chartDemoCode1,
                chartDemoCode2,

                showCode1: false,
                showCode2: false,

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
                },
                chartOptions2: {
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
                    this.chartOptions2 = {
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
                    this.chartOptions2 = {
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
                    this.chartOptions2 = {
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

<style lang="scss" scoped>
    .comp-desc-box, .use-desc-box {
        margin-bottom: 50px;
    .name {
        font-weight: 400;
        color: #1f2f3d;
        font-size: 28px;
        margin: 0;
    }
    .desc {
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
    }
    }
    .use-desc-box {
    .name {
        font-size: 22px;
    }
    }
    .use-list {
        display: flex;
        flex-wrap: wrap;
        .item{
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 30px;
        }
    }
    .demo-block {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        transition: .2s;
    .source {
        padding: 24px;
    }
    .demo-block-control{
        line-height: 40px;
        height: 40px;
        border-top: 1px solid #ebebeb;
        text-align: center;
    }
    }
</style>