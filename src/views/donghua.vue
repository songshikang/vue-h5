<template>
    <div class="app">
      <div @click="click">点击</div>
        <ul>
          <li>你好</li>
          <li>测试</li>
          <li>字体</li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <ul>
            <li>
              <img :src="imgs" alt="">
            </li>
          </ul>
        </div>
    </div>
    
</template>

<script>


  export default {
    name: 'app',
    
    data() {
      return {
        name:'旧的',
        num:0,
        imgs:'../../static/images/btn1.png',
        list:[{
          img:''
        }]

      }
    },
    mounted () {
      this.list()
    },
    methods: {
      click(){
        
        // this.num++
      },
      list(){
        let a='你好'
        console.log('a1',a)
        if(true)return  false            //条件成立，跳出方法，后面代码都不执行
            a='随缘'
        console.log('a2',a)
      }
    },
    watch: {
      "name":(val,oldval)=>{
          console.log('77777777',val,oldval)
      },
      "num"(val,oldval){
          console.log('77777777',val,oldval)
      },
    }
  }
</script>
<style lang="scss">
ul,li{
  margin: 0;padding: 0;list-style: none
}
.app{
  height: 500px;
  width: 200px;
  border: 1px solid #ccc;
  >ul{
    width: 100%;
    height: 100px;
    background: #0f0;
    z-index: 9;
    >li{
      width: 80%;
      height: 50px;
      background: #ccc;
      &:nth-child(3){
        background: #f00;
      }
    }
  }
  
}
</style>



