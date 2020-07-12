<template>
    <div class="banner">
        <transition name="slide-fade" appear>
            <div class="banner-text transition-box" v-show="true">
                <h1>NetDragon Design</h1>
                <p>微微微型组件库</p>
                <div class="description">
                    <p>基于考试的设计模型，设计简洁直观的操作流程</p>
                    <p>语言表达清晰且表意明确,专注于dialog和柱状图的组件库，这只是一个开始</p>
                </div>
                <el-button type="primary" round>
                    <router-link to="/list">开始使用</router-link>
                </el-button>
            </div>
        </transition>
        <bubbles-effect :options="options"></bubbles-effect>
        <div class="copyright">Copyright © 1999-2020 NetDragon Websoft Holdings Limited. All Rights Reserved</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import vueCanvas from 'vue-canvas-effect';

    Vue.use(vueCanvas);

    export default {
        components: {},
        data() {
            return {
                options: {
                    color: 'rgba(225,225,225,0.5)', //气泡颜色
                    radius: 15, //气泡半径
                    densety: 0.3, // 气泡密度 越大越密集(建议不要大于1)
                    clearOffset: 0.2 // 气泡消失距离[0-1] 越大越晚消失
                }
            }
        }
    }
</script>
<style>
    canvas {
        pointer-events: none;
    }
</style>
<style lang="scss" scoped>
    .banner {
        text-align: center;

        .banner-text {
            margin-top: 5%;
        }

        .banner-text {
            h1 {
                font-size: 54px;
                color: rgba(0, 0, 0, .85);
            }

            p {
                font-size: 20px;
                color: #697b8c;
            }

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        .description {
            margin-bottom: 30px;

            p {
                font-size: 14px;
            }
        }
    }

    .slide-fade-enter-active {
        transition: all 1s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to

    /* .slide-fade-leave-active for below version 2.1.8 */
        {
        transform: translateX(30px);
        opacity: 0;
    }

    .copyright {
        font-size: 10px;
        color: #999;
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>