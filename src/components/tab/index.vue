<template>
    <div v-cloak>
        <Tabs v-model="value">
            <Pane label="标签一" name="1">
                标签一内容
            </Pane>
            <Pane label="标签二" name="2">
                标签二内容
            </Pane>
            <Pane label="标签三" name="3">
                标签三内容
            </Pane>
        </Tabs>
    </div>
</template>
<script>
    import Tabs from './Tabs'
    import Pane from './Pane'
    export default {
        components: {
            Tabs,
            Pane
        },
        data () {
            return {
                value: ''
            }
        }
    }
</script>