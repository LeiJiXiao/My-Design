<template>
    <Dialog title="提示"
            :visible.sync="dialogVisible4"
            cancelBtnText="cancel"
            confirmBtnText="confirm"
    >
        <span>显示自定义按钮文字对话框</span>
    </Dialog>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false
            }
        }
    }
</script>

<style scope>

</style>