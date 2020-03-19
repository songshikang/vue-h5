<template>
    <div class="box">
            {{title}} {{$store.state}}
            <div>{{title}}</div>
            <div @click="goTO">这是跳转</div>
            <div @click="goTO1">这是跳转1</div>
            <vueUeditor ueditorPath='/static/ueditor/'></vueUeditor>
            <router-view></router-view>
    </div>
</template>
<script>
import{mapGetters,mapActions} from 'vuex'
import vueUeditor from 'vue-ueditor'
    export default {
        components: {
            vueUeditor
        },
        data () {
            return {
               msgg:'你是个大傻逼啊啊啊啊啊啊啊啊' 
            }
        },
        // beforeRouteEnter:(to,from,next)=>{ 
        //     next(vm=>{
        //         alert("hello" + vm.msgg);
        //     })
        // },
        computed:{
            ...mapGetters(['title'])
        },
        mounted () {
            // console.log('4444',this.$store.state.title)
            // this.$store.dispatch('stringAdd', '门前大河边游过一群鸭') // 第一种访问action
            this.handl()                                               //第二种访问action
            
        },

        methods: {
            goTO(){
                this.$router.push({
                    path: '/demo', 
                    query:{
                        name:'9987'
                    }
                    }
                )
            },
            goTO1(){
                this.$router.push({
                    path: '/demo1', 
                    query:{
                        name:'9987qwe'
                    }
                    }
                )
            },
            ...mapActions(['stringAdd']),
            handl(){
                this.stringAdd('猪撞树上了')
            }
            
        }
    }
</script>
<style>

</style>