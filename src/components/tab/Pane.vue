<template>
    <div class="pane" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'pane',
        props: {
            name: {
                type: String
            },
            label: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                show: true
            }
        },
        methods: {
            updateNav() {
                this.$parent.updateNav()
            }
        },
        watch: {
            label() {
                this.updateNav()
            }
        },
        mounted() {
            this.updateNav()
        },
        computed: {
            active() {
                return false
            }
        }
    }
</script>
<style scoped>
</style>