<template>
    <div class="tabs">
        <div class="tabs-nav">
            <div :class="['tabs-tab', { 'active': item.name === currentValue }]"
                 v-for="(item, index) in navList"
                 @click = "handleChange(index)" 
                 :key="item.name"
            >
                {{item.label}}
            </div>
        </div>
        <div class="tabs-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tabs',
        props: {
            value: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                currentValue: this.value,
                navList: []
            }
        },
        watch: {
            value: function(val) {
                this.currentValue = val;
            },
            currentValue() {
                this.updateStatus();
            }
        },
        methods: {
            getPans () {
                return this.$children.filter( item => item.$options.name === 'pane');
            },
            updateNav() {
                this.navList = [];
                const tabs = this.getPans();
                tabs.forEach((pane, index) => {
                    const { label, name = index } = pane;
                    if (!name) {
                        pane.name = index;
                    }
                    this.navList.push({
                        label: label,
                        name: name
                    });
                    if (index === 0 && !this.currentValue) {
                        this.currentValue = name;
                    }
                })
                this.updateStatus();
            },
            updateStatus () {
                let tabs = this.getPans()
                let _this = this
                tabs.forEach(function (tab) {
                    let b = tab.name === _this.currentValue
                    tab.show = b
                    return tab.show
                })
            },
            handleChange (index) {
                let nav = this.navList[index];
                let name = nav.name
                this.currentValue = name
                this.$emit('input', name)
                this.$emit('on-click', name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    [v-cloak]{
        display: none;
    }
    .tabs{
        font-size: 14px;
        color: #657180;
    }
    .tabs-bar:after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #d7dde4;
        margin-top:-1px;
    }
    .tabs-tab{
        display: inline-block;
        padding: 4px 16px;
        margin-right: 6px;
        background: #fff;
        border: 1px solid #d7dde4;
        cursor: pointer;
        position: relative;
    }
    .active{
        color: #3399ff;
        border-top: 1px solid #3399ff;
        border-bottom: 1px solid #3399ff;
    }
    .active:before{
        content: '';
        display: block;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .tabs-container{
        padding: 8px 0;
    }
</style>