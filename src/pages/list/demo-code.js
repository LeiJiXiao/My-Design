const dialogDemoCode1 = '<template>\n' +
    '    <Dialog title="提示"\n' +
    '            :visible.sync="dialogVisible"\n' +
    '    >\n' +
    '        <span>显示默认对话框!!</span>\n' +
    '    </Dialog>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                dialogVisible: false\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '    \n' +
    '</style>';

const dialogDemoCode2 = '<template>\n' +
    '    <Dialog title="提示"\n' +
    '            :visible.sync="dialogVisible"\n' +
    '    >\n' +
    '        <span>显示自定义页脚对话框!!</span>\n' +
    '        <div class="dialog-footer" slot="footer" style="text-align: center">\n' +
    '            自定义footer\n' +
    '        </div>\n' +
    '    </Dialog>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                dialogVisible: false\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>';

const dialogDemoCode3 = '<template>\n' +
    '    <Dialog title="提示"\n' +
    '            :visible.sync="dialogVisible"\n' +
    '            width="80%"\n' +
    '            height="180px"\n' +
    '    >\n' +
    '        <span>宽：80%， 高:180px</span>\n' +
    '    </Dialog>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                dialogVisible: false\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>';

const dialogDemoCode4 = '<template>\n' +
    '    <Dialog title="提示"\n' +
    '            :visible.sync="dialogVisible4"\n' +
    '            cancelBtnText="cancel"\n' +
    '            confirmBtnText="confirm"\n' +
    '    >\n' +
    '        <span>显示自定义按钮文字对话框</span>\n' +
    '    </Dialog>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                dialogVisible: false\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>';

const chartDemoCode1 = '<template>\n' +
    '    <Chart :chartOptions="chartOptions" />\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                chartOptions: {\n' +
    '                    xAxis: {\n' +
    '                        data: [\'衬衫\', \'羊毛衫\', \'雪纺衫\', \'裤子\', \'高跟鞋\', \'袜子\'],\n' +
    '                    },\n' +
    '                    yAxis: {},\n' +
    '                    series: [\n' +
    '                        {\n' +
    '                            name: \'销量\',\n' +
    '                            type: \'bar\',\n' +
    '                            data: [10, 20, 36, 10, 10, 20],\n' +
    '                        },\n' +
    '                    ],\n' +
    '                }\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>';

const chartDemoCode2 = '<template>\n' +
    '    <div>\n' +
    '        <el-select @change="changeHandler">\n' +
    '            <el-option :value="1" label="默认1"></el-option>\n' +
    '            <el-option :value="2" label="数据2"></el-option>\n' +
    '            <el-option :value="3" label="数据3"></el-option>\n' +
    '        </el-select>\n' +
    '        <div>\n' +
    '            <Chart :chartOptions="chartOptions" />\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '    export default {\n' +
    '        data() {\n' +
    '            return {\n' +
    '                chartOptions: {\n' +
    '                    xAxis: {\n' +
    '                        data: [\'衬衫\', \'羊毛衫\', \'雪纺衫\', \'裤子\', \'高跟鞋\', \'袜子\'],\n' +
    '                    },\n' +
    '                    yAxis: {},\n' +
    '                    series: [\n' +
    '                        {\n' +
    '                            name: \'销量\',\n' +
    '                            type: \'bar\',\n' +
    '                            data: [10, 20, 36, 10, 10, 20],\n' +
    '                        },\n' +
    '                    ],\n' +
    '                }\n' +
    '            }\n' +
    '        },\n' +
    '        methods: {\n' +
    '            changeHandler(v) {\n' +
    '                if (v === 1) {\n' +
    '                    this.chartOptions = {\n' +
    '                        xAxis: {\n' +
    '                            data: [\'衬衫1\', \'羊毛衫1\', \'雪纺衫1\', \'裤子1\', \'高跟鞋1\', \'袜子1\'],\n' +
    '                        },\n' +
    '                        yAxis: {},\n' +
    '                        series: [\n' +
    '                            {\n' +
    '                                name: \'销量\',\n' +
    '                                type: \'bar\',\n' +
    '                                data: [100, 200, 300, 400, 500, 600],\n' +
    '                            },\n' +
    '                        ],\n' +
    '                    };\n' +
    '                } else if (v === 2) {\n' +
    '                    this.chartOptions = {\n' +
    '                        xAxis: {\n' +
    '                            data: [\'衬衫2\', \'羊毛衫2\', \'雪纺衫2\', \'裤子2\', \'高跟鞋2\', \'袜子2\'],\n' +
    '                        },\n' +
    '                        yAxis: {},\n' +
    '                        series: [\n' +
    '                            {\n' +
    '                                name: \'销量\',\n' +
    '                                type: \'bar\',\n' +
    '                                data: [600, 500, 500, 300, 200, 100],\n' +
    '                            },\n' +
    '                        ],\n' +
    '                    };\n' +
    '                } else if ( v === 3) {\n' +
    '                    this.chartOptions = {\n' +
    '                        xAxis: {\n' +
    '                            data: [\'成都\', \'北京\', \'上海\', \'深圳\', \'广州\', \'武汉\'],\n' +
    '                        },\n' +
    '                        yAxis: {},\n' +
    '                        series: [\n' +
    '                            {\n' +
    '                                name: \'GDP\',\n' +
    '                                type: \'bar\',\n' +
    '                                data: [60000, 50000, 504440, 3444400, 20330, 10220],\n' +
    '                            },\n' +
    '                        ],\n' +
    '                    };\n' +
    '                }\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '</script>\n' +
    '\n' +
    '<style scope>\n' +
    '\n' +
    '</style>'

export {
    dialogDemoCode1,
    dialogDemoCode2,
    dialogDemoCode3,
    dialogDemoCode4,
    chartDemoCode1,
    chartDemoCode2,
}