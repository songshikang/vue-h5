<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="ti">你好是vue
      <span @click="handleRouter">我是react</span>
    </div>
    <div @click="handleFuwen">富文本编辑器</div>
    <div @click="handleMap">地图撒点</div>
    <button type="primary" @click="exportToExcel">导出excal表</button>
    <div @click="handlecitie">磁贴</div>
    <div @click="handledonghua">父子样式嵌套</div>
    <div @click="handletuozhuai">拖拽</div>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="module">


import {apiGet} from '../api/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Welcome to Your Vue.js App',
    
      tableData: [
        {
          name:'路人甲',
          phone:'123456',
          email:'123@123456.com'
        },
        {
          name:'炮灰乙',
          phone:'123456',
          email:'123@123456.com'
        },
        {
          name:'土匪丙',
          phone:'123456',
          email:'123@123456.com'
        },
        {
          name:'流氓丁',
          phone:'123456',
          email:'123@123456.com'
        },
      ]
    }
  },
  // beforeRouteEnter:(to,from,next)=>{ 
  //   console.log('我是大哥')
  //     next(vm=>{
  //           alert("hello" + vm.msg);
  //       })
  //   },
  // beforeRouteLeave:(to,from,next)=>{
  //   if(confirm("确定离开此页面吗？") == true){
  //       next();
  //   }else{
  //       next(false);
  //   }
  // },

  // mounted () {
  //   // this.apiget()
  //   this.getData123()
  // },
  methods: {
    exportToExcel() {
        //excel数据导出
        require.ensure([], () => {
            const {
                export_json_to_excel
            } = require('../assets/js/Export2Excel');
            const tHeader = ['序号','名字', '电话', '邮箱', '主要投资项目','投资周期', '投资人数', '投资年变化率','备注'];
            const filterVal = ['index','name', 'phone', 'email', 'payType','orderPeriod', 'orderPersonConunt', 'orderYearRate', 'remarks'];
            const list = this.tableData;
            const data = this.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, '列表excel');
        })
    },
    formatJson(filterVal, jsonData) {
      console.log('666666',filterVal, jsonData)
        return jsonData.map(v => filterVal.map(j => v[j]))
    },
    handletuozhuai(){
      this.$router.push({
        path:'/views/tuozhuai'
      })
    },
    handledonghua(){
      this.$router.push({
        path:'/views/donghua'
      })
    },
    handlecitie(){
      this.$router.push({
        path:'/views/citie'
      })
    },
    handleMap(){
      this.$router.push({
        path:'/views/map'
      })
    },
    handleFuwen(){
      this.$router.push({
          path: '/views/fuwen', 
        }
      )
    },
      handleRouter(){
        this.$router.push({
          path: '/views/childList', 
        })
      },
      getData123(){
        apiGet("/api/imp/pc/noticeInfo/showInfo",{noticeType:'3'}).then((res)=>{
          console.log('res11124',res)
        })
      }
    // apiget(){
    //   this.$http.get("/api/imp/pc/noticeInfo/showInfo",{params:{noticeType:'3'}}).then(function (response) {
    //     console.log('成功4444',response);
    //     }).catch(function (error) {
    //       console.log('错误',error);
    //     })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped  >
h1, h2 {
  font-weight: normal;
}
.ti{
  color: blue;
  span{
    color: red;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
