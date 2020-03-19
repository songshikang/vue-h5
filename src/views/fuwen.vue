<template>
  <div>
    <vueUeditor ueditorPath="/static/ueditor/" @ready="editorReady"></vueUeditor>
    <div @click="getdata">点击</div>
    <!-- <div>{{dataData}}</div> -->
  </div>
</template>
<script>
import vueUeditor from "vue-ueditor";
import ueditor from '../components/UE';
export default {
  components: {
    vueUeditor,ueditor
  },
  data() {
    return {
      dataData:'',
      ue:null
    };
  },
  created () {
    
  },
  mounted () {
  },
  methods: { 
      editorReady(editorInstance){
        this.ue = editorInstance
      },
      getdata(){
        let c = this.ue.getContent() //获取富文本编辑器内的值
         console.log('ccccccccccccc',c)
      },
    
        
  }
   
   

};
</script>

