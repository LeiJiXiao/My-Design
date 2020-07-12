<template>
    <div class="comp-list">
        <div class="comp-desc-box">
            <h2 class="name">Dialog 对话框</h2>
            <p class="desc">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
        </div>
        <div class="use-list">
            <div class="item">
                <div class="demo-block">
                    <div class="source">
                        <el-button type="text" @click="dialogVisible1 = true">显示默认对话框</el-button>
                        <Dialog title="提示"
                                :visible.sync="dialogVisible1"
                        >
                            <span>显示默认对话框!!</span>
                        </Dialog>
                    </div>
                    <div class="mate" v-show="showCode1">
                            <pre v-highlightjs>
                                <code class="html hljs xml">{{ dialogDemoCode1 }}</code>
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
                    <div class="source">
                        <el-button type="text" @click="dialogVisible2 = true">显示自定义页脚对话框</el-button>
                        <Dialog title="提示"
                                :visible.sync="dialogVisible2"
                        >
                            <span>显示自定义页脚对话框!!</span>
                            <div class="dialog-footer" slot="footer" style="text-align: center">
                                自定义footer
                            </div>
                        </Dialog>
                    </div>
                    <div class="mate" v-show="showCode2">
                            <pre v-highlightjs>
                                <code class="html hljs xml">{{ dialogDemoCode2 }}</code>
                            </pre>
                    </div>
                    <div class="demo-block-control" @click="showCode2 = !showCode2">
                        <i class="el-icon-arrow-down" v-show="!showCode2"></i>
                        <i class="el-icon-arrow-up" v-show="showCode2"></i>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="demo-block">
                    <div class="source">
                        <el-button type="text" @click="dialogVisible3 = true">显示自定义宽高对话框</el-button>
                        <Dialog title="提示"
                                :visible.sync="dialogVisible3"
                                width="80%"
                                height="180px"
                        >
                            <span>宽：80%， 高:180px</span>
                        </Dialog>
                    </div>
                    <div class="mate" v-show="showCode3">
                            <pre v-highlightjs>
                                <code class="html hljs xml">{{ dialogDemoCode3 }}</code>
                            </pre>
                    </div>
                    <div class="demo-block-control" @click="showCode3 = !showCode3">
                        <i class="el-icon-arrow-down" v-show="!showCode3"></i>
                        <i class="el-icon-arrow-up" v-show="showCode3"></i>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="demo-block">
                    <div class="source">
                        <el-button type="text" @click="dialogVisible4 = true">显示自定义按钮文字对话框</el-button>
                        <Dialog title="提示"
                                :visible.sync="dialogVisible4"
                                cancelBtnText="cancel"
                                confirmBtnText="confirm"
                        >
                            <span>显示自定义按钮文字对话框</span>
                        </Dialog>
                    </div>
                    <div class="mate" v-show="showCode4">
                            <pre v-highlightjs>
                                <code class="html hljs xml">{{ dialogDemoCode4 }}</code>
                            </pre>
                    </div>
                    <div class="demo-block-control" @click="showCode4 = !showCode4">
                        <i class="el-icon-arrow-down" v-show="!showCode4"></i>
                        <i class="el-icon-arrow-up" v-show="showCode4"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dialog from '@/components/Dialog';
    import {
        dialogDemoCode1,
        dialogDemoCode2,
        dialogDemoCode3,
        dialogDemoCode4,
    } from './demo-code';

    export default {
        components: {
            Dialog
        },
        data() {
            return {
                dialogVisible1: false,
                dialogVisible2: false,
                dialogVisible3: false,
                dialogVisible4: false,

                dialogDemoCode1,
                dialogDemoCode2,
                dialogDemoCode3,
                dialogDemoCode4,

                showCode1: false,
                showCode2: false,
                showCode3: false,
                showCode4: false,
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
        width: 50%;
        box-sizing: border-box;
        margin-bottom: 30px;
    }
    .item:nth-child(odd) {
        padding-right: 10px;
    }
    .item:nth-child(even) {
        padding-left: 10px;
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