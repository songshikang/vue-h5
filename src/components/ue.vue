
<template>
        <script :id = id type="text/plain"></script>
</template>
<script>
    export default {
        name: 'UE',
        data() {
            return {
                editor: null
            }
        },
        props: {
            content: {
                type: String,
                default:''
            },
            config: {
                type: Object,
            },
            id: {
                type: String
            }
        },
        mounted() {
            const _this = this;
            _this.editor = UE.getEditor(_this.id, _this.config); // 初始化UE
            _this.editor.addListener("ready", function () {
                _this.editor.setContent(_this.content); // 确保UE加载完成后，放入内容。
            });
        },
        methods: {
            getContent() { 
            		// 获取内容方法
                return this.editor.getContentTxt();;
            }
        },
        destroyed() {
            this.editor.destroy();
        },
    }
</script>
<style></style>