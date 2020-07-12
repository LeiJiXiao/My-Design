<template>
    <div v-show="p_visible">
        <div class="dialog-wrapper">
            <div class="dialog" :style="{ width: width }">
                <div class="dialog-header clearfix">
                    <span class="title">{{ title }}</span>
                    <span class="close-btn fr" @click="p_visible = false">
                        <i class="el-icon-close"></i>
                    </span>
                </div>
                <div class="dialog-body" :style="{ height: height }">
                    <slot></slot>
                </div>
                <slot name="footer">
                    <div class="dialog-footer">
                        <el-button @click="cancelHandler" size="small">{{ cancelBtnText }}</el-button>
                        <el-button type="primary" @click="confirmHandler" size="small">{{ confirmBtnText }}</el-button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            title: {
                type: String,
                default() {
                    return '提示';
                }
            },
            width: {
                type: String,
                default() {
                    return '30%'
                }
            },
            height: {
                type: String,
                default() {
                    return 'auto'
                }
            },
            cancelBtnText: {
                type: String,
                default() {
                    return '取消'
                }
            },
            confirmBtnText: {
                type: String,
                default() {
                    return '确定'
                }
            }
        },
        data() {
            return {
                p_visible: this.visible
            }
        },
        watch: {
            visible(newVal) {
                this.p_visible = newVal;
            },
            p_visible(newVal) {
                this.$emit('update:visible', newVal);
            }
        },
        methods: {
            cancelHandler() {
                this.p_visible = false;
                this.$emit('cancel');
            },
            confirmHandler() {
                this.p_visible = false;
                this.$emit('confirm');
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    .dialog-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .7);
    }
    .dialog{
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .dialog-header{
        padding: 20px 20px 10px;
        .title{
            line-height: 24px;
            font-size: 18px;
            color: #303133;
        }
        .close-btn{
            cursor: pointer;
        }
    }
    .dialog-body{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
        overflow-y: auto;
    }
    .dialog-footer{
        padding: 20px;
        text-align: right;
    }
</style>