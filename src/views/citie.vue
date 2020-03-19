<template>

<div style="width:1920px;height:1080px"  ref="snk">
    <div class="center ">
     <!-- 自定义功能增减区 -->
    <div>
        <div class="addStyle">
            <button @click="add" class="add">增加一块</button>
            <ul class="ulStyle" v-show="bool">
                <li v-for="(item,index) in gongneng" :key="index" @click="handleAdd(item)">{{item.name}}</li> 
            </ul>
        </div>
        
        <button @click="reduce" class="add">减少一块</button>
    </div>
    
    <!-- 自定义功能渲染区 -->
    <div class="box" >
        <div v-for="(item,index) in dataList" :key="index" class="itembox " >
                {{item.name}} <span v-if="!item.bool"><span @click="reduceItem(index)">去掉</span></span> 
                
            <div v-if="item.bool" class="itemboxx">
                <div v-for="(items,_index) in name3"  :key="_index" class="itemsBox" >
                    {{items.name1}}<span><span @click="reduceItem(index)">去掉</span> </span>
                </div>
            </div>   
        </div>
    </div>

    <!-- 背景换肤区 -->
    <div class="skin">
        <button @click="handleSkin()">选择皮肤</button>
        <ul v-show="isShow">
            <li class="skin1" @click="handleSkn('skn1')">皮肤红</li>
            <li class="skin2" @click="handleSkn('skn2')">皮肤绿</li>
            <li class="skin3" @click="handleSkn('skn3')">皮肤蓝</li>
        </ul>
    </div>
</div>
</div>

</template>

<script>
export default {
    data () {
        return {
            isShow:false,
            bool:false,
            variableSkin:'',
            gongneng:[{
                name:'A功能'
            },{
                name:'B功能'
            },{
                name:'C功能'
            }
            ],
            dataList:[{
                name:'1'
            },{
                name:'2'
            },{
                name:'3'
            },{
                name:'4'
            },{
                name:'5'
            },
            {
                name:'6'
            },{
               bool:'7' 
            } ,{
                name:'4'
            },{
                name:'5'
            }, 
            ],



            name3:[{
                name1:'7'
            },{
                name1:'7'
            }]

        }
    },
    mounted () {
         
         this.getCookieList() 
        
    },
    methods: {

        //换皮肤
        handleSkin(){
            this.isShow = !this.isShow
        },
        //确认皮肤 且存cookie
        handleSkn(str){
                this.variableSkin = str
                console.log('8888',this.$refs.snk)
                this.$refs.snk.classList.remove('skn1')
                this.$refs.snk.classList.remove('skn2')
                this.$refs.snk.classList.remove('skn3')
                this.$refs.snk.classList.add(str)
                // //将此元素 索引  样式存进 cookie
                document.cookie = `name=` + escape(str);
        },
        getCookieList(){
           let cookies = document.cookie.split('; ')
           cookies.forEach((item,index)=>{
              let c= cookies[index].split('=')
              
              if(c[1] == "skn1" || c[1] == "skn2" || c[1] == "skn3"){
                    this.$refs.snk.classList.add(c[1])
              }
           })
        },
        //增加一块
        add(){
            this.bool = !this.bool
        },
        handleAdd(item){
                this.dataList.push(item)
        },
        //减少一块
        reduce(){
            this.dataList.pop()
        },
        //去掉一块
        reduceItem(index){
            this.dataList.splice(index,1)
            this.$refs.snk[index].classList.remove(this.variableSkin)
        }
    }
}
</script>
<style lang="scss" scoped> 
ul,li{
    padding:0;margin:0;list-style:none

}
.center{
    width: 100%;
    height: 430px;
    display: flex;
    // background: #00f
    
}
 .box{
    //  width: 630px;
     height: 100%;
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     margin-right: 50px;
     .itembox:nth-child(8n-7){
        height: 90px;
        width: 200px;
        border: 1px solid #f00;
        margin-bottom: 10px;
        margin-right: 10px;
     }
     .itembox:nth-child(8n-6){
        height: 88px;
        width: 200px;
        border: 1px solid #f00;
        margin-bottom: 10px;
     }
     .itembox:nth-child(8n-5){
        height: 200px;
        width: 200px;
        border: 1px solid #f00;
     }
     .itembox:nth-child(8n-4){
        height: 190px;
        width: 200px;
        border: 1px solid #f00;
        margin-bottom: 10px;
        margin-right: 10px
     }
     .itembox:nth-child(8n-3){
        height: 200px;
        width: 200px;
        border: 1px solid #f00;
     }
     .itembox:nth-child(8n-2){
        height: 190px;
        width: 200px;
        border: 1px solid #f00;
        margin-bottom: 10px;
        margin-right: 10px;
     }
     .itembox:nth-child(8n-1){
        height: 100px;
        width: 200px;
        // border: 1px solid #f00;
        .itemboxx{
            display: flex;
            justify-content: space-between;
            .itemsBox{
            width: 95px;
            height: 100px;
            border:1px solid #0f0;
        }
        }
        
     }
     .itembox:nth-child(8n){
        height: 100px;
        width: 200px;
        border: 1px solid #f00;
     }
 }
</style>

<style lang='scss'>
    .add{
        width: 70px;
        height: 30px;

    }
    
    .skin{
        position: fixed;
        right: 30px;
        top: 30px;
        color: #fff;
        .skin1{
            background: #f00;
        }
        .skin2{
            background: #0f0;
        }
        .skin3{
            background: #00f;
        }
    }
    
    
    .skn1{
        background: #f00
    }
    .skn2{
        background: #0f0
    }
    .skn3{
        background: #00f
    }
</style>




