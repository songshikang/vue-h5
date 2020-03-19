<template>
   <div>

        <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="(item,index) in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i"
                  >
                  <div @click="handle(index)" style="width:100%;height:100%"> {{item.i}}</div>
           
        </grid-item>
    </grid-layout>
   </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
    export default {
        components: {
           GridLayout: VueGridLayout.GridLayout,
           GridItem: VueGridLayout.GridItem
       },
        data () {
            return {
                layout:[
                    {"x":0,"y":0,"w":2,"h":2,"i":"图书"},
                    {"x":2,"y":0,"w":2,"h":4,"i":"文字"},
                    {"x":4,"y":0,"w":2,"h":5,"i":"文案"},
                    {"x":6,"y":0,"w":2,"h":3,"i":"策划"},
                    {"x":8,"y":0,"w":2,"h":3,"i":"书记"},
                    {"x":10,"y":0,"w":2,"h":3,"i":"政要"},
                    {"x":0,"y":5,"w":2,"h":5,"i":"新闻"},
                    {"x":2,"y":5,"w":2,"h":5,"i":"侧腰"},
                    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
                    {"x":6,"y":3,"w":2,"h":4,"i":"9"},
                    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
                    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
                    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
                    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
                    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
                    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
                    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
                    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
                    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
                    {"x":2,"y":6,"w":2,"h":2,"i":"19"},
                    {"x":0,"y":6,"w":2,"h":2,"i":"119"}
                ]
            }
        },
        methods: {
           
            handle(num){
                console.log('5555555555',num)
            }
        }
    }
</script>

<style>
.vue-grid-item{
    background: #cccccc
}

</style>



